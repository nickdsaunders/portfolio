import React from 'react';

const CardItem = (props) => {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__wrapper">
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
            <h6 className="cards__item__stacks">{props.stacks}</h6>
            <br />
            <a href={props.path} className="cards__item__links">
              {props.links}
            </a>
            <br />
            <a href={props.path2} className="cards__item__links">
              {props.links2}
            </a>
          </div>
        </div>
      </li>
    </>
  );
};

export default CardItem;
