import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/foodtrucklogo.jpeg";

// styles
import "./Nav.css";

export default function Nav(props) {
  return (
    <div className="nav-container">
      <div className="nav-title">
        <Link to="/">
          <img className="logo" src={logo} alt="Food Truck Logo"></img>
        </Link>
        <div id="title" style={{ color: "white" }}>
          Food Truck Finder
        </div>
      </div>

      <div id="nav-items">
        {/* <div className="link">Favourites</div> */}
        <Link to="/signup">
          <div id="link" style={{ color: "white" }}>
            Add Truck
          </div>
        </Link>
        <Link to="/login">
          <div id="link" style={{ color: "white" }}>
            Logout
          </div>
        </Link>
      </div>
    </div>
  );
}
