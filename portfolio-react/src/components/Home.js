import React, { Component } from "react";
import "../styles/Home.css";
import Headshot from "../images/nick-headshot.jpg";
import ZigZag from "../images/zigzag.png";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-text-wrapper">
          <img id="zigzag" alt="decorative-image" src={ZigZag} />
          <h1 className="home-header">
            Hello World! <br /> I'm
            <span className="home-header-name"> Nick,</span>
            <br /> a Full-Stack Software Developer.
          </h1>
        </div>
        <div className="home-photo-wrapper">
          <img id="home-photo" alt="headshot image" src={Headshot} />
        </div>
      </div>
    );
  }
}
export default Home;
