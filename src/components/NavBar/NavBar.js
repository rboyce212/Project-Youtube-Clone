import React from "react";
import { Link } from "react-router-dom";
import navBarLogo from "../../images/yt_navBar_logo.png";
import "./NavBar.css";

function Navbar() {
  return (
    <div className="d-flex bd-highlight mb-3" id="header">
      <div className="mr-auto p-2 bd-highlight">
        <img src={navBarLogo} alt="YouTube Logo" height="60" />
      </div>
      <div className="d-flex align-items-center" id="homeLink">
        <Link className="mx-2" to="/">
          Home
        </Link>{" "}
      </div>
      <div className="d-flex align-items-center" id="aboutLink">
        <Link className="mx-2" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
