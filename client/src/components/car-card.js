import React, { useEffect, useState } from "react";
import "./card.css";

const Card = (props) => {
  const { name, car_make, car_model, chasis_number, car_year } = props;

  const [price, setPrice] = useState(Math.random() * 1000000);


  useEffect(() => {
    setPrice(Math.random() * (50000 - 3500 + 1) + 3500);
  }, [name, car_make, car_model, chasis_number, car_year]);

  // let price = Math.random() * 1000000;

  return (
    <div className="main-card">
      <div className="card-img"></div>
      <div className="card-content">
        <div className="text-container">
          <div className="card-name">
            {car_make} {name}
          </div>
          <div className="card-price">R{price.toFixed(2)}</div>
        </div>
        <div className="card-btn">Shop Now</div>
      </div>
    </div>
  );
};

export default Card;
