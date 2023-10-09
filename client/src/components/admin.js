import React from "react";
import "../App.css";
import NavBar from "./NavBar";
import Form from "./form_create";

const Admin = () => {
    return (
        <div className="admin_main">

            <NavBar />
            <div className="forms">
                <Form />
            </div>
        </div>
    );
};

export default Admin;
