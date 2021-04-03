import React from "react";
import CardItem from "./CardItem";
import "../styles/Cards.css";

const Projects = () => {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/murray1.jpeg"
              head="Enter Project Name Here"
              text="Enter project description here"
              label="Project1231"
              path="/"
            />
            <CardItem
              src="images/murray1.jpeg"
              head="Enter Project Name Here"
              text="Enter project description here"
              label="Project1"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/murray1.jpeg"
              head="Enter Project Name Here"
              text="Enter project description here"
              label="Project1"
              path="/"
            />
            <CardItem
              src="images/murray1.jpeg"
              head="Enter Project Name Here"
              text="Enter project description here"
              label="Project1"
              path="/"
            />
            <CardItem
              src="images/murray1.jpeg"
              head="Enter Project Name Here"
              text="Enter project description here"
              label="Project1"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
