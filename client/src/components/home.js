import React from "react";
import "../App.css";
import Image from "../images/header-image.png";
import NavBar from "./NavBar";
import Card from "./car-card";

const Home = () => {
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
      <div className="purchase-section">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

    </div>
  );
};

export default Home;
