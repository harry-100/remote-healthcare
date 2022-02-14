import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import "./NavLinks.css";
const NavLinks = (props) => {
  const auth = useContext(AuthContext);
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
      {auth.isLoggedIn && (
      <li>
        <NavLink to={`/$auth.userId}/dashboard`}>DASHBOARD</NavLink>
      </li>
      )}
      {!auth.isLoggedIn && (
      <li className="nav-item">
        {/* <NavLink to="/auth" className="nav-link disabled"> */}
        <NavLink to="/auth">
          Authenticate
        </NavLink>
      </li>
      )}
      {auth.isLoggedIn && (
        <li className="nav-item">
          <button onClick={auth.logout}>Logout</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
