import { useState } from "react";
import "../Styles/DonationPayment.css";

const presetAmounts = [10, 25, 50, 100, 250];

const paymentMethods = [
  { id: "card", label: "Credit / Debit Card" },
  { id: "crypto", label: "Crypto Wallet" },
  { id: "bank", label: "Bank Transfer" },
];

export default function DonationPayment() {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("once");
  const [method, setMethod] = useState("card");

  const handlePresetClick = (val) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(Number(e.target.value));
  };

  return (
    <section className="donation-split">

      {/* ---------- LEFT CONTENT ---------- */}
      <div className="donation-content">
        <span className="donation-badge">Premium Giving</span>

        <h2>
          Support the Future of
          <br /> Decentralized Finance
        </h2>

        <p>
          Make a refined contribution through our secure crypto-powered donation
          platform. Designed for transparency, speed, and global accessibility.
        </p>

        <div className="donation-stats">
          <div>
            <strong>$42M+</strong>
            <span>Raised Globally</span>
          </div>
          <div>
            <strong>120+</strong>
            <span>Countries</span>
          </div>
          <div>
            <strong>98%</strong>
            <span>Donor Satisfaction</span>
          </div>
        </div>

        <ul className="donation-points">
          <li>Institutional-grade encryption</li>
          <li>Instant blockchain confirmation</li>
          <li>Multi-wallet compatibility</li>
          <li>Recurring giving programs</li>
        </ul>
      </div>

      {/* ---------- RIGHT CARD ---------- */}
      <div className="donation-card">

        <div className="donation-toggle">
          <button
            className={frequency === "once" ? "active" : ""}
            onClick={() => setFrequency("once")}
          >
            One-Time
          </button>
          <button
            className={frequency === "monthly" ? "active" : ""}
            onClick={() => setFrequency("monthly")}
          >
            Monthly
          </button>
        </div>

        <h3 className="donation-title">Donation Amount</h3>

        <div className="amount-grid">
          {presetAmounts.map((val) => (
            <button
              key={val}
              className={amount === val ? "selected" : ""}
              onClick={() => handlePresetClick(val)}
            >
              ${val}
            </button>
          ))}

          <input
            type="number"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={handleCustomChange}
          />
        </div>

        <h3 className="donation-title">Payment Method</h3>

        <div className="payment-methods">
          {paymentMethods.map((m) => (
            <div
              key={m.id}
              className={`method-card ${
                method === m.id ? "active" : ""
              }`}
              onClick={() => setMethod(m.id)}
            >
              {m.label}
            </div>
          ))}
        </div>

        <button className="donate-btn">
          Donate ${amount || 0}
          {frequency === "monthly" && " / month"}
        </button>

        <p className="donation-note">
          🔒 Fully secure checkout • Transparent on-chain records • Cancel anytime
        </p>
      </div>

    </section>
  );
}
