import React from "react";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Image Name"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__head">{props.head}</h5>
            <p className="cards__item__text">{props.text}</p>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
