import React from "react";
import "./navbar.css";

const NavBar  = () => {
    return (
        <div className="nav">
            <h1 className="glensoundsTitle">GlenSpares</h1>
            <div className="navItem activeNavItem">Home</div>
            <div className="navItem">Shop</div>
            <div className="navItem">Contact Us</div>
            <div className="navItem">Cart</div>

        </div>
    );
}

export default NavBar;