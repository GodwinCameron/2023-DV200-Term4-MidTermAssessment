import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="nav">
      <h1 className="glensoundsTitle">GlenSpares</h1>
      <Link to="/" className={`nav_link ${location.pathname === '/' ? 'activeNavItem' : ''}`}>
        <div className="navItem">Home</div>
      </Link>
        <div className="navItem">Shop</div>
        <div className="navItem">Contact Us</div>
      <Link to="/cart" className={`nav_link ${location.pathname === '/cart' ? 'activeNavItem' : ''}`}>
        <div className="navItem">Cart</div>
      </Link>
      <Link to="/admin" className={`nav_link ${location.pathname === '/admin' ? 'activeNavItem' : ''}`}>
        <div className="navItem">Admin</div>
      </Link>
    </div>
  );
};

export default NavBar;
