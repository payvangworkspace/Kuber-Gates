import { motion } from "framer-motion";
import {
  FaGlobe,
  FaExchangeAlt,
  FaCoins,
  FaCheckCircle,
  FaWallet,
  FaBolt
} from "react-icons/fa";
import "../Styles/MultiCurrencySupport.css";

export default function MultiCurrencySupport() {
  return (
    <section className="mc-section">
      <div className="mc-container">

        {/* HEADER */}
        <motion.div
          className="mc-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mc-badge">MULTI‑CURRENCY</span>
          <h2>Accept payments in multiple currencies — globally</h2>
          <p>
            Let your customers pay in their preferred fiat or cryptocurrency
            while you settle seamlessly — inspired by global leaders like
            Coinbase Commerce, CoinGate, and NOWPayments.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mc-grid">

          {/* LEFT CONTENT */}
          <motion.div
            className="mc-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Why multi‑currency matters</h3>

            <div className="mc-points">
              <div className="mc-point">
                <FaCoins />
                <div>
                  <h4>Fiat & Crypto Support</h4>
                  <p>Accept USD, EUR, INR and major cryptocurrencies seamlessly.</p>
                </div>
              </div>

              <div className="mc-point">
                <FaExchangeAlt />
                <div>
                  <h4>Real‑time Conversion</h4>
                  <p>Automatic exchange rates with transparent pricing.</p>
                </div>
              </div>

              <div className="mc-point">
                <FaWallet />
                <div>
                  <h4>Flexible Settlements</h4>
                  <p>Settle in fiat or crypto — your choice, your control.</p>
                </div>
              </div>

              <div className="mc-point">
                <FaBolt />
                <div>
                  <h4>Optimized Checkout</h4>
                  <p>Localized payment experience increases conversion.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="mc-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="mc-glow mc-glow-1" />
            <span className="mc-glow mc-glow-2" />

            <div className="mc-card-header">
              <FaGlobe />
              <span>GLOBAL READY</span>
            </div>

            <h4>One integration. Global coverage.</h4>
            <p>
              Expand internationally without managing multiple gateways or
              currency conversions.
            </p>

            <ul className="mc-list">
              <li><FaCheckCircle /> 100+ supported currencies</li>
              <li><FaCheckCircle /> Auto‑FX & transparent rates</li>
              <li><FaCheckCircle /> Region‑aware checkout</li>
              <li><FaCheckCircle /> Unified reporting</li>
            </ul>

            <button className="mc-btn">
              Enable Multi‑Currency
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
