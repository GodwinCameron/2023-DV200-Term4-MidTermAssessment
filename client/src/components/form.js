import React, {} from 'react';
import "../App.css";

const Home = () => {

    return (
      <div className='main'>
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>

  <label>
    Car Make:
    <input type="text" name="car_make" />
  </label>

  <label>
    Car Model:
    <input type="text" name="car_model" />
  </label>

  <label>
    Chasis Number:
    <input type="number" name="chasis_number" />
  </label>

  <label>
    Car Year:
    <input type="number" name="car_year" />
  </label>

  <input type="submit" value="Submit" />
</form>
      </div>
    );

}

export default Home;