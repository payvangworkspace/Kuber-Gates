import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "../Styles/LoginComponent.css";
import logo from "../assets/logo.png"; // replace with your logo path

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });
  };

  return (
    <div className="log-kg-login-wrapper">
      <div className="log-kg-login-card">

        {/* LOGO */}
        <div className="log-kg-logo">
          <img src={logo} alt="Kuber Gates Logo" />
        </div>

        <h2>Welcome back</h2>
        <p className="log-kg-subtitle">
          Sign in to your Kuber Gates dashboard
        </p>

        <form onSubmit={handleSubmit}>

          <div className="log-kg-input-group">
            <FaUser className="log-kg-icon" />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="log-kg-input-group">
            <FaLock className="log-kg-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="log-kg-login-btn">
            Sign In
          </button>
        </form>

        <div className="log-kg-footer">
          <a href="#">Forgot password?</a>
        </div>

      </div>
    </div>
  );
};

export default LoginComponent;
