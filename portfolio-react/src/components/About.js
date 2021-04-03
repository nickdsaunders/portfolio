import React, { useState } from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <h1 className="about-header">
          Hi! I'm <span className="about-header-name">Nick</span> a Software
          Developer
        </h1>
        <p className="about-content">
          Full stack developer with strong analytical skills, attention to
          detail, and out of the box problem solving solutions. Fueled by a
          passion for clean efficient code and the desire to make practical
          applications both user intuitive and aesthetically pleasing. Backed
          with a demonstrated history of being an exemplary team player and a
          skilled multi-tasker with 7+ years of professional experience in the
          design industry.
        </p>
      </div>
    </div>
  );
};

export default About;
