import { useNavigate, useParams } from "react-router-dom";
import "../index.css"; // or a separate SendEmail.css if preferred
import { useState } from "react";
import { useAuth } from "../../AuthContext";


const AdminSendEmail = () => {
  const { id } = useParams();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const navigate = useNavigate()
  const { user } = useAuth();

  const sendEmail = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");
    setLoading(true);
    setFeedback(null);

    try {
      const response = await fetch(`http://127.0.0.1:8000/admin/email/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.access_token || token}`,
        },
        body: JSON.stringify({ subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setFeedback({ type: "success", message: "✅ Email sent successfully!" });
        setSubject("");
        setMessage("");
      } else {
        setFeedback({ type: "error", message: data.detail || "❌ Failed to send email" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setFeedback({ type: "error", message: "❌ Network error occurred" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-container">
      <div className="email-card">
        <h3>Send Email to Client</h3>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Message..."
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        {feedback && (
          <p
            style={{
              marginTop: "1rem",
              color: feedback.type === "success" ? "green" : "red",
              fontWeight: 500,
            }}
          >
            {feedback.message}
          </p>
        )}

        <button 
        className="email-back-btn"
        onClick={()=> navigate("/dashboard")} >Go back</button>
      </div>
    </div>
  );
};

export default AdminSendEmail;
