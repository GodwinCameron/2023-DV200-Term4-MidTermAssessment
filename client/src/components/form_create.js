import React, { useState } from "react";
import "./form.css";
import axios from "axios";

const Form = () => {
  const [carData, setCarData] = useState({
    name: "",
    car_make: "",
    car_model: "",
    chasis_number: "",
    car_year: "",
  });

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    const updatedValue =
      name === "chasis_number" || name === "car_year"
        ? parseInt(value, 10)
        : value;
    setCarData({ ...carData, [name]: updatedValue });
    console.log(carData);
  };

  const handleCreateCar = async (e) => {
    e.preventDefault();
    try {
      axios.post(`http://localhost:5000/api/car/`, carData);
      document.getElementById("name").value = "";
      document.getElementById("car_make").value = "";
      document.getElementById("car_model").value = "";
      document.getElementById("chasis_number").value = "";
      document.getElementById("car_year").value = "";
      document.querySelector(".message").style.display = "block";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form_main">
      <h1 className="form_header">Create New Car</h1>
      <h1 className="form_header message">Product added!</h1>
      <form onSubmit={handleCreateCar} className="form_stack">
        <label className="label">
          Part Name:
          <input
            id="name"
            onChange={handleDataChange}
            className="form_input"
            type="text"
            name="name"
          />
        </label>

        <label className="label">
          Car Make:
          <input
            id="car_make"
            onChange={handleDataChange}
            className="form_input"
            type="text"
            name="car_make"
          />
        </label>

        <label className="label">
          Car Model:
          <input
            id="car_model"
            onChange={handleDataChange}
            className="form_input"
            type="text"
            name="car_model"
          />
        </label>

        <label className="label">
          Chasis Number:
          <input
            id="chasis_number"
            onChange={handleDataChange}
            className="form_input"
            type="number"
            name="chasis_number"
          />
        </label>

        <label className="label">
          Car Year:
          <input
            id="car_year"
            onChange={handleDataChange}
            className="form_input"
            type="number"
            name="car_year"
          />
        </label>

        <button className="form_sumbit" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
