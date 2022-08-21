import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Our Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/image9.jpg"
              text="Providing consultancy services to both private and goverment institutions and agencies"
              label="Consultancy Services"
              path="/services"
            />
            <CardItem
              src="images/image1.jpg"
              text="Generating accurate, reliable, and verifiable data for diverse groups of users"
              label="Data Services"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/image8.jpg"
              text="Training and skills development in many areas of business such as finance, economics and IT"
              label="Training Services"
              path="/services"
            />
            <CardItem
              src="images/image4.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam corrupti porro quam quos aut tempore."
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/image5.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam corrupti porro quam quos aut tempore."
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
