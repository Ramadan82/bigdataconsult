import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Typed from "react-typed";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <img src="images/image3.jpg" alt="header" /> */}
      <h1>Need Reliable Service Solutions?</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          CHAT WITH US <i className="btns" />
        </Button>
      </div>
      <Typed
        className="typed-text"
        strings={[
          "CONSULTANCY SERVICES",
          "DATA SERVICES",
          "TRAINING SERVICES",
          "OTHER SERVICES",
        ]}
        typeSpeed={150}
        backSpeed={150}
        loop
      />
    </div>
  );
}

export default HeroSection;
