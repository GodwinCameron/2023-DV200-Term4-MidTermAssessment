import React, { useState } from "react";
import "../App.css";
import Image from "../images/header-image.png";
import NavBar from "./NavBar";
import Card from "./car-card";
import axios from "axios";

const Home = () => {

  const [cars, setCars] = useState([]);

  axios.get(`http://localhost:5000/api/allCars`).then((res) => {
    setCars(res.data);
  });

  return (
    <div className="main">
      <NavBar />

      {/* main image */}
      <div className="header-image">
        <h1 className="slogan">
          Over <span className="yellow-colour">100,000</span> auto parts are
          available waiting for you to search
        </h1>
      </div>

      {/* purchase section */}
<<<<<<< Updated upstream
      <div className="purchase-section">
        {cars.map((car) => (
          <Card
            id={car._id}
            key={car._id}
            name={car.name}
            car_make={car.car_make}
            car_model={car.car_model}
            chasis_number={car.chasis_number}
            car_year={car.car_year}
          />
        ))}
=======
      <div className='purchase-section'>

      <div className='block-1'>
          <div className='shop-now-btn'>
            <div className='btn-text'>Shop Now</div> 
          </div>
        </div>

        <div className='block-2'>
          <div className='shop-now-btn'>
            <div className='btn-text'>Shop Now</div> 
          </div>
        </div>

        <div className='block-3'>
          <div className='shop-now-btn'>
            <div className='btn-text'>Shop Now</div> 
          </div>
        </div>

        <div className='block-4'>
          <div className='shop-now-btn'>
            <div className='btn-text'>Shop Now</div> 
          </div>
        </div>

>>>>>>> Stashed changes
      </div>

    </div>
  );
};

export default Home;
