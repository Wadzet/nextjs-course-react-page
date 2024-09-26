import React from 'react';

function PricingPlans({ isMonthly }) {
    const annualPrices = [19.99, 24.99, 39.99];
    const monthlyPrices = [199.99, 249.99, 399.99];

    const prices = isMonthly ? monthlyPrices : annualPrices;

    return (
        <section className="pricing-container">
            <div className="pricing-plans">
                {prices.map((price, index) => (
                    <article key={index} className="plan">
                        <h3>{["Basic", "Professional", "Master"][index]}</h3>
                        <p className="price">
                            <span>$</span>{price}
                        </p>
                        <div className="plan-info">
                            <p>{index === 0 ? "500 GB Storage" : index === 1 ? "1 TB Storage" : "2 TB Storage"}</p>
                            <p>{index === 0 ? "2 Users Allowed" : index === 1 ? "5 Users Allowed" : "10 Users Allowed"}</p>
                            <p>{index === 0 ? "Send up to 3 GB" : index === 1 ? "Send up to 10 GB" : "Send up to 20 GB"}</p>
                        </div>
                        <button>Learn More</button>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default PricingPlans;
