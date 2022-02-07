import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
const NavLinks = (props) => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink to="/" exact className="nav-link">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">
          About Us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/services" className="nav-link">
          Our Services
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/auth" className="nav-link disabled">
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
