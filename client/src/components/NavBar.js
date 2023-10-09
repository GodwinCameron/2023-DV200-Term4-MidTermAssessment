import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar  = () => {
    return (
        <div className="nav">
            <h1 className="glensoundsTitle">GlenSpares</h1>
            <Link to="/" className="nav_link">
            <div className="navItem activeNavItem">Home</div>
            </Link>
            <div className="navItem">Shop</div>
            <div className="navItem">Contact Us</div>
            <Link to="/cart" className="nav_link">
            <div className="navItem">Cart</div>
            </Link>
            <Link to="/admin" className="nav_link">
            <div className="navItem">Admin</div>
            </Link>
        </div>
    );
}

export default NavBar;