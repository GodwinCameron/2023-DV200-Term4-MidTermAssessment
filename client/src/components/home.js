import React, { } from 'react';
import "../App.css";
import Image from "../images/header-image.png";

const Home = () => {

  return (
    <div className='main'>

      {/* main image */}
      <img className='main-img' src={Image} />

      {/* purchase section */}
      <div className='purchase-section'>
        <div className='block-1'>

        </div>
        <div className='block-2'>

        </div>
        <div className='block-3'>

        </div>
        <div className='block-4'>

        </div>

      </div>

    </div>
  );

}

export default Home;