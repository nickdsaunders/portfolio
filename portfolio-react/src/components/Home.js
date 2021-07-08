import React from 'react';
import '../styles/Home.css';
import Headshot from '../images/nick-headshot.jpg';
import ZigZag from '../images/zigzag.png';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-text-wrapper">
          <img className="zigzag-home" alt="decorative" src={ZigZag} />
          <h1 className="home-header-h1">
            Hello World! <br /> I'm
            <span className="home-header-name-h1"> Nick,</span>
            <br /> a Full-Stack
            <br />
            Web Developer.
          </h1>
          <div className="home-divider"></div>
        </div>

        <div className="home-photo-wrapper">
          <img className="home-photo" alt="headshot" src={Headshot} />
        </div>
      </div>
    </div>
  );
};
export default Home;
