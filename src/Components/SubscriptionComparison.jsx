import "../Styles/SubscriptionComparison.css";

const features = [
  {
    name: "Monthly Swaps",
    starter: "40",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    name: "Analytics Dashboard",
    starter: "Basic",
    pro: "Advanced",
    enterprise: "Institutional",
  },
  {
    name: "Execution Speed",
    starter: "Standard",
    pro: "Priority",
    enterprise: "Ultra-Fast",
  },
  {
    name: "API Access",
    starter: "—",
    pro: "✔",
    enterprise: "✔",
  },
  {
    name: "Dedicated Manager",
    starter: "—",
    pro: "—",
    enterprise: "✔",
  },
  {
    name: "Compliance Tools",
    starter: "—",
    pro: "✔",
    enterprise: "✔",
  },
];

export default function SubscriptionComparison() {
  return (
    <section className="subscription-compare">

      <div className="compare-header">
        <h2>Compare Plans</h2>
        <p>
          See exactly what’s included in each subscription tier before
          upgrading.
        </p>
      </div>

      <div className="compare-table-wrapper">
        <table className="compare-table">
          <thead>
            <tr>
              <th>Features</th>
              <th>Starter</th>
              <th className="highlight-col">Pro</th>
              <th>Institutional</th>
            </tr>
          </thead>

          <tbody>
            {features.map((row, idx) => (
              <tr key={idx}>
                <td>{row.name}</td>
                <td>{row.starter}</td>
                <td className="highlight-col">{row.pro}</td>
                <td>{row.enterprise}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  );
}
