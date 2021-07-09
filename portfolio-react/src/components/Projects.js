import React from 'react';
import CardItem from './CardItem';
import '../styles/Cards.css';
import ZigZag from '../images/zigzag.png';
import Apartments from '../images/apartment-finder.gif';
import Webstacks from '../images/webstacks.gif';
import Cats from '../images/cat-tinder.gif';
import Thirsty from '../images/thirsty.gif';
import Portfolio from '../images/portfolio.gif';

const Projects = () => {
  return (
    <div className="cards__container">
      <img className="projects-zigzag" alt="decorative" src={ZigZag} />
      <h1 className="projects-h1">Projects</h1>
      <div className="divider-projects"></div>
      <div className="cards__wrapper">
        <ul className="cards__items">
          <CardItem
            src={Thirsty}
            head="Thirsty For Knowledge"
            text="Thirsty For Knowledge is an exciting game of trivia built with React in Rails, where the user sets the category and difficulty at the start of the game to fetch the trivia questions from an external API.  
            Users then gain or loose points based on their answer choice. The higher the difficulty the more points are awarded. The final score is then recorded on the leaderboard, which is a database table generated using Active Record."
            stacks="React, Ruby on Rails, SQL, CSS, HTML, Bootstrap"
            path="https://github.com/nickdsaunders/trivia-game"
            links="GitHub"
            path2="https://evening-chamber-40393.herokuapp.com/"
            links2="Quench Your Thirst"
          />
          <CardItem
            src={Apartments}
            head="NuPad"
            text="NuPad is an apartment finding app that was built using React in Rails and has full CRUD functionality for apartment listings. It also utilizes the Ruby Gem Devise to handle user login/logout and conditional rendering."
            stacks="React, Ruby on Rails, SQL, CSS, HTML, Bootstrap"
            path="https://github.com/nickdsaunders/apartment-app"
            links="GitHub"
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src={Cats}
            head="Frisky Felines"
            text="Frisky Felines, like Tinder but for Cats, is my first full stack application and currently a work in progress. It features a decoupled React frontend and Rails backend with full CRUD abilites. It was also my first time using the Bootstrap library for quick styling."
            stacks="React, Ruby on Rails, SQL, CSS, HTML, Bootstrap"
            path="https://github.com/nickdsaunders/cat-tinder-frontend"
            links="Frontend"
            path2="https://github.com/nickdsaunders/cat-tinder-backend"
            links2="Backend"
          />
          <CardItem
            src={Webstacks}
            head="Webstacks Dashboard"
            text="As an intern on a team of 4, we were tasked with developing a decoupled full-stack application utilizing a React frontend and Rails backend. I personally contributed by building custom styled-components from Figma wireframes, implemented Google OAuth, integrated Hubspot API's to fetch data, and exercised test driven development with RSpec and Jest."
            stacks="React, Rails, SQL"
          />
          <CardItem
            src={Portfolio}
            head="Portfolio"
            text="This portfolio project I built from scratch in React, HTML, and CSS. In doing so I learned an immeasurable amount about formatting and styling especially using flexbox. It is still definitely a work in progress but a great learning experience thus far."
            stacks="React, HTML, CSS"
            path="https://github.com/nickdsaunders/portfolio/tree/main/portfolio-react"
            links="GitHub"
          />
        </ul>
      </div>
    </div>
  );
};

export default Projects;
