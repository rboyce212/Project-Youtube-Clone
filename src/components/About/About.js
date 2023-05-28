import React from "react";
import logo from "../../images/yt_logo_light.png";
import "./About.css";

function About() {
  return (
    <div id="About">
      <h2>
        <strong>About this project...</strong>
      </h2>
      <div className="d-flex bd-highlight">
        <div>
          This React application lets you search for YouTube videos using the
          YouTube API. The search results will be displayed as a list that can
          be played when selected. Users can then choose to add a comment that
          will be stored and displayed locally on our App.
        </div>
        <div className="p-3 flex-fill bd-highlight">
          <img src={logo} alt="YouTube Logo" width="200" height="55" />
        </div>
      </div>
      <br />
      <br />
      <h4>
        <strong>About the developers...</strong>
      </h4>
      <h5>
        <a href="https://github.com/iHanjra" rel="noreferrer">
          Irfan Hanjra
        </a>
      </h5>
      <p>
        Aspiring Full Stack Software Developer interested in generative AI and
        the intersection of creativity and technology.
      </p>
      <br />
      <h5>
        <a href="https://github.com/rboyce212" rel="noreferrer">
          Rich Boyce
        </a>
      </h5>
      <p>
        After 16 years working for two tech start-ups, I'm now at Pursuit
        learning to become a Full Stack Developer.
        <a
          href="https://www.linkedin.com/in/richard-boyce-nyc/"
          rel="noreferrer"
        >
          <br />
          LinkedIn
        </a>
      </p>
    </div>
  );
}

export default About;
