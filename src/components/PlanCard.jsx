import React from 'react';

function PlanCard({ title, price, storage, users, sendLimit }) {
    return (
        <article className="plan">
            <h3>{title}</h3>
            <p className="price">
                <span>$</span>{price}
            </p>
            <div className="plan-info">
                <p>{storage}</p>
                <p>{users}</p>
                <p>{sendLimit}</p>
            </div>
            <button>Learn More</button>
        </article>
    );
}

export default PlanCard;