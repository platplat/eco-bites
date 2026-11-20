import React from "react";

function FoodCard(props) {
  const { drop } = props;

  return (
    <div className="food-card">
      <div className="food-card-header">
        <h3 className="food-title">{drop.title}</h3>
        <span className="food-quantity">Qty: {drop.quantity}</span>
      </div>
      <p className="food-provider"><strong>{drop.providerName}</strong></p>
      <p className="food-location">📍 {drop.location}</p>
      <div className="dietary-tags">
        {drop.dietaryTags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default FoodCard;
