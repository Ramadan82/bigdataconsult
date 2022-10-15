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
              label="Consultancy"
              path="/1"
            />
            <CardItem
              src="images/image1.jpg"
              text="Generating accurate, reliable, and verifiable data for diverse groups of users"
              label="Data "
              path="/2"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/image8.jpg"
              text="Training and skills development in different areas of business to meet your business needs"
              label="Training"
              path="/3"
            />
            <CardItem
              src="images/image4.jpg"
              text="Conducting both academic and industrial research with high degree of accuracy."
              label="Research"
              path="/4"
            />
            <CardItem
              src="images/image5.jpg"
              text="Facilitating the use of technology by enterprises and end users through specialized technology-oriented solutions"
              label="Technology"
              path="/5"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
