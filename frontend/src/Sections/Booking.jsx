import React, { useState, useEffect } from 'react';
import "../index.css";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const Appointment = async () => {
    const backup = { name, phone, email, service, date };
    setSubmitting(true);
    setSuccess(false);

    // Optimistically reset the form
    setName("");
    setPhone("");
    setEmail("");
    setService("");
    setDate("");

    try {
      const response = await fetch("http://127.0.0.1:8000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: backup.name,
          phone_number: backup.phone,
          email: backup.email,
          service: backup.service,
          appointment_time: backup.date,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        alert("⚠️ Failed to submit. Try again.");
        console.error("Error Response", data);
        // Optional rollback
        setName(backup.name);
        setPhone(backup.phone);
        setEmail(backup.email);
        setService(backup.service);
        setDate(backup.date);
      }
    } catch (err) {
      alert("❌ Network error. Please try again or call us.");
      console.error("Fetch Error", err);
      setName(backup.name);
      setPhone(backup.phone);
      setEmail(backup.email);
      setService(backup.service);
      setDate(backup.date);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Appointment();
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <>
      <section id="booking" className="booking">
        <div className="container">
          <div className="booking-content">
            <div className="booking-header">
              <h3 className="section-title">Book Your Appointment</h3>
              <p className="section-subtitle">
                Ready to transform your brows? Fill out the form below and we'll
                get back to you soon.
              </p>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">Service</label>
                <select
                  id="service"
                  className="form-select"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Microblading">Microblading</option>
                  <option value="Brow Tint">Brow Tint</option>
                  <option value="Ombre Brows">Ombre Brows</option>
                  <option value="Touch-Up">Touch-Up</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="datetime" className="form-label">Preferred Date & Time</label>
                <input
                  type="datetime-local"
                  id="datetime"
                  className="form-input"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Appointment Request"}
              </button>
            </form>

            {success && (
              <div className="success-message animate-pop">
                ✅ Appointment submitted! We'll get back to you shortly.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
