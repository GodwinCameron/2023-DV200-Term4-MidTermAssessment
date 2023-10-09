import React, { useEffect, useState } from "react";
import "./card.css";

const Card = (props) => {
  const { name, car_make, car_model, chasis_number, car_year } = props;

  const [price, setPrice] = useState(Math.random() * 1000000);


  useEffect(() => {
    setPrice(Math.random() * (50000 - 3500 + 1) + 3500);
  }, [name, car_make, car_model, chasis_number, car_year]);


  const addToCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
    const car = {
      id: props.id,
      name: props.name,
      car_make: props.car_make,
      car_model: props.car_model,
      chasis_number: props.chasis_number,
      car_year: props.car_year,
      price: price,
    }
    if (cart === null) {
      const newCart = [car];
      localStorage.setItem("cart", JSON.stringify(newCart));
      console.log(newCart);
    } else {
      const newCart = [...cart, car];
      localStorage.setItem("cart", JSON.stringify(newCart));
      console.log(newCart);
    }
    document.getElementById("cartBtn").innerHTML = "Added to cart!";
    document.getElementById("cartBtn").style.backgroundColor = "#f5f5f5";
  };



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
        <div id="cartBtn" onClick={addToCart} className="card-btn">Shop Now</div>
      </div>
    </div>
  );
};

export default Card;
