import React from "react";
import "../Styles/Pricing.css";
 
const plans = [
  {

    name: "Standard",

    price: "1%",

    description: "Crypto payment processing fee",

    features: [

      "No monthly fees",

      "Pay-as-you-go",

      "Weekly settlements",

      "Basic support",

    ],

  },

  {

    name: "Enterprise",

    price: "Custom",

    description: "Tailored value-based pricing",

    features: [

      "Custom settlements",

      "Dedicated account manager",

      "Branded checkout",

      "Developer support",

    ],

  },

];
 
export default function Pricing() {

  return (
<div className="pricing-container">
<section className="pricing-header">
<h1>Pricing Plans</h1>
<p>Simple, transparent pricing for any size business.</p>
</section>
 
      <div className="plans-wrapper">

        {plans.map(({ name, price, description, features }) => (
<div key={name} className="plan-card">
<h2 className="plan-title">{name}</h2>
<p className="plan-price">{price}</p>
<p className="plan-desc">{description}</p>
 
            <ul className="plan-features">

              {features.map((f, i) => (
<li key={i}>{f}</li>

              ))}
</ul>
 
            <button className="btn-plan">

              {name === "Enterprise" ? "Contact Sales" : "Get Started"}
</button>
</div>

        ))}
</div>
 
      <section className="comparison-section">
<h2>Compare Features</h2>
<table className="compare-table">
<thead>
<tr>
<th>Feature</th>
<th>Standard</th>
<th>Enterprise</th>
</tr>
</thead>
<tbody>
<tr>
<td>Monthly fee</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Payment fee</td>
<td>1%</td>
<td>Custom</td>
</tr>
<tr>
<td>Branded Checkout</td>
<td>❌</td>
<td>✅</td>
</tr>
<tr>
<td>Dedicated Manager</td>
<td>❌</td>
<td>✅</td>
</tr>
</tbody>
</table>
</section>
</div>

  );

}