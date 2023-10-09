import React from "react";
import "../App.css";
import Image from "../images/header-image.png";
import NavBar from "./NavBar";

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
        <div className="block-1"></div>
        <div className="block-2"></div>
        <div className="block-3"></div>
        <div className="block-4"></div>
      </div>
    </div>
  );
};

export default Home;
