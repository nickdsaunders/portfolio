import React from 'react';
import CardItem from './CardItem';
import '../styles/Cards.css';
import Water from '../images/water-photo.jpg';
import ZigZag from '../images/zigzag.png';
import Gif1 from '../images/giphy-test.gif';

const Projects = () => {
  return (
    <div className="cards__container">
      <img className="projects-zigzag" alt="decorative" src={ZigZag} />
      <h1 className="projects-h1">Projects</h1>
      <div className="divider-projects"></div>
      <div className="cards__wrapper">
        <ul className="cards__items">
          <CardItem
            src={Gif1}
            head="Thirsty For Knowledge"
            text="Thirsty For Knowledge is an exciting game of trivia built with React in Rails, where the user sets the category and difficulty at the start of the game to pull the trivia questions from an external API.  
            Users gain or loose points based on their answer choice. The higher the difficulty the more points are awarded.
            The final score is then recorded on the leaderboard table in the database.
             Open web app | View repo"
            path="/"
          />
          <CardItem
            src={Water}
            head="NuPad"
            text="NuPad is an apartment finding app that was built using React in Rails and has full CRUD functionality creating, updating, and deleting apartment listings."
            path="/"
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src={Water}
            head="Frisky Felines"
            text="Frisky Felines, like Tinder but for Cats, is my first full stack application with a decoupled React frontend and Rails backend. It features full CRUD"
            path="/"
          />
          <CardItem
            src={Water}
            head="Portfolio"
            text="Enter project description here"
            path="/"
          />
          <CardItem
            src={Water}
            head="Webstacks Dashboard"
            text="Enter project description here"
            path="/"
          />
        </ul>
      </div>
    </div>
  );
};

export default Projects;
