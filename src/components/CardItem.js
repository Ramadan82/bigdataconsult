import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link
          className="cards__item__link"
          to={props.path}
          style={{ color: "darkred" }}
        >
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="services" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>

            <span>Click to Learn More</span>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
