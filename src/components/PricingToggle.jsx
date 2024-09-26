import React, { useState } from 'react';

function PricingToggle({ onToggle }) {
    const [isMonthly, setIsMonthly] = useState(false);
    const handleChange = () => {
        const newToggleState = !isMonthly;
        setIsMonthly(newToggleState);
        onToggle(newToggleState);
    };

    return (
        <section className="pricing-toggle">
            <div className="toggle">
                <span>Annually</span>
                <input type="checkbox" id="toggleSwitch" onChange={handleChange} />
                <label htmlFor="toggleSwitch"></label>
                <span>Monthly</span>
            </div>
        </section>
    );
}

export default PricingToggle;
