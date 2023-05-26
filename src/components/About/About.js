import React from "react";
import logo from "../../images/yt_logo_light.png";

function About() {
  return (
    <div id="About">
      <h1>
        <strong>About this project...</strong>
      </h1>
      <p>
        This React application lets you search for YouTube videos using the
        YouTube API. The search results will be displayed as a list that can be
        played when selected. Users can then choose to add a comment that will
        be stored and displayed locally on our App.
      </p>
      <img src={logo} alt="YouTube Logo" width="397" height="79" />
      <br />
      <br />
      <h2>
        <strong>About the developers...</strong>
      </h2>
      <h3>
        <a href="https://github.com/iHanjra" rel="noreferrer">
          Irfan Hanjra
        </a>
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h3>
        <a href="https://github.com/rboyce212" rel="noreferrer">
          Rich Boyce
        </a>
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}

export default About;
