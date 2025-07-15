import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const API = import.meta.env.VITE_API_BASE_URL;


const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        login({ access_token: data.access_token });
        navigate("/dashboard");
      } else {
        alert("Login Failed");
        console.error("Login Failed", data);
      }
    } catch (error) {
      console.error("❌ Error during login:", error);
      alert(`Error during login ${error}`);
    }
  };

  return (
    <div className="Admin-Login">
      <form onSubmit={handleLogin}>
        <div className="email">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="password">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
