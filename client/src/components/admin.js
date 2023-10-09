import React, { useState, useEffect } from "react";
import "../App.css";
import NavBar from "./NavBar";
import Form from "./form_create";
import axios from "axios";

const Admin = () => {
  const [cars, setCars] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/allCars`).then((res) => {
      setCars(res.data);
    });
  }, []);

  const handleDelete = () => {
    if (selected) {
      axios
        .delete(`http://localhost:5000/api/car/${selected._id}`)
        .then(() => {
          // Remove the deleted car from the state
          setCars(cars.filter((car) => car._id !== selected._id));
          setSelected(null);
        })
        .catch((error) => {
          console.error("Error deleting car:", error);
        });
    }
  };

  return (
    <div className="admin_main">
      <NavBar />
      <div className="forms">
        <Form />
      </div>

      <div className="dropdown_box">
        <select
          className="dropdown"
          onChange={(e) => {
            const selectedCar = cars.find((car) => car.name === e.target.value);
            setSelected(selectedCar);
          }}
          defaultValue="default"
        >
          <option value="default" className="dropdown-content">
            Choose an option
          </option>
          {cars.map((car) => (
            <option
              className="dropdown-content"
              key={car._id}
              value={car.name}
              style={{ marginLeft: 200 }}
            >
              {car.name}
            </option>
          ))}
        </select>

        {selected ? (
          <div className="holder">
            <div className="character-name">{selected.name}</div>
            <button className="delete_button" onClick={handleDelete}>Delete</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Admin;
