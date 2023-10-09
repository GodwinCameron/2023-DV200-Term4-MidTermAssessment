import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="main-card">
      <div className="card-img"></div>
      <div className="card-content">
        <div className="text-container">
          <div className="card-name">Name</div>
          <div className="card-price">R000000</div>
        </div>
        <div className="card-btn">Shop Now</div>
      </div>
    </div>
  );
};

export default Card;
