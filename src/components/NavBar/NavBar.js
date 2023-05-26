import React from "react";
import { Link } from "react-router-dom";
import navBarLogo from "../../images/yt_navBar_logo.png";

function NavBar() {
  return (
    <div>
      <span>
        <img src={navBarLogo} alt="YouTube Logo" height="30" />
      </span>
      <Link to="/">Home</Link> <Link to="/about">About</Link>
    </div>
  );
}

export default NavBar;
