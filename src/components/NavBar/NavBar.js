import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <span>
        <h1>YouTube</h1>
      </span>
      <Link to="/">Home</Link> <Link to="/about">About</Link>
    </div>
  );
}

export default NavBar;
