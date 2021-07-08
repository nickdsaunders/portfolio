import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = (props) => {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap">
            <img
              src={props.src}
              alt="project-screenshot"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__head">{props.head}</h5>
            <div className="card-head-divider"></div>
            <p className="cards__item__text">{props.text}</p>
            {/* <a href="https://github.com/nickdsaunders" target="_blank">
              <i className="fab fa-github" />
            </a> */}
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
