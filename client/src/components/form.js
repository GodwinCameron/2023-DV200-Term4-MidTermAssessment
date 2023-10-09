import React, { } from 'react';
import "./form.css";

const Home = () => {

    return (
        <div className='form_main'>
            <h1 className='form_header'>Create New Car</h1>
            <form className='form_stack'>
                <label className='label'>
                    Name:
                    <input className='form_input' type="text" name="name" />
                </label>

                <label className='label'>
                    Car Make:
                    <input className='form_input' type="text" name="car_make" />
                </label>

                <label className='label'>
                    Car Model:
                    <input className='form_input' type="text" name="car_model" />
                </label>

                <label className='label'>
                    Chasis Number:
                    <input className='form_input' type="number" name="chasis_number" />
                </label>

                <label className='label'>
                    Car Year:
                    <input className='form_input' type="number" name="car_year" />
                </label>

                <input className='form_sumbit' type="submit" value="Create" />
            </form>
        </div>
    );

}

export default Home;