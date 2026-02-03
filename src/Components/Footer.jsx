import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";
import "../Styles/Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="kg-footer">

      <div className="kg-footer-container">

        {/* BRAND */}
        <div className="kg-footer-brand">
          <img src={logo} alt="KuberGates Logo" />
          <p>
            KuberGates is a next‑generation crypto payment infrastructure
            enabling global businesses to accept, manage, and scale payments
            securely.
          </p>

          <div className="kg-footer-socials">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="kg-footer-links">
          <h4>Products</h4>
          <Link to="/products/crypto-payments">Accept Crypto Payments</Link>
          <Link to="/products/payment-gateway">Payment Gateway</Link>
          <Link to="/products/payment-links">Payment Links</Link>
          <Link to="/products/invoices">Invoices</Link>
          <Link to="/products/subscriptions">Subscriptions</Link>
          <Link to="/products/white-label">White‑Label Payments</Link>
          <Link to="/products/multi-currency">Multi‑Currency Support</Link>
          <Link to="/products/refunds">Refunds & Partial Refunds</Link>
        </div>

        {/* DEVELOPERS */}
        <div className="kg-footer-links">
          <h4>Developers</h4>
          <Link to="/developers/api-docs">API Documentation</Link>
          <Link to="/developers/sdks">SDKs</Link>
          <Link to="#">Webhooks</Link>
          <Link to="#">System Status</Link>
        </div>

        {/* COMPANY */}
        <div className="kg-footer-links">
          <h4>Company</h4>
          <Link to="/company">About Us</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="#">Security</Link>
          <Link to="#">Compliance</Link>
          <Link to="#">Contact</Link>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="kg-footer-bottom">
        <p>© 2026 KuberGates. All rights reserved.</p>
        <div>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
}
