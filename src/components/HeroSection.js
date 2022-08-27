import React from "react";
import "../App.css";
import "./HeroSection.css";
import Typed from "react-typed";
import { useHistory } from "react-router-dom";
function HeroSection() {
  let history = useHistory();
  return (
    <div className="hero-container">
      {/* <img src="images/image3.jpg" alt="header" /> */}
      <h1>Need Reliable Service Solutions?</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <button
          className="btn"
          style={{
            backgroundColor: "transparent",
            color: "#fff",
            padding: "12px 26px",
            border: "1px solid #fff",
            fontSize: "20px",
            transition: "all 0.3s ease-out",
            zIndex: 6,
            position: "relative",
          }}
          onClick={() => history.push("/register")}
        >
          GET STARTED
        </button>

        <button
          className="btn"
          style={{
            backgroundColor: "transparent",
            color: "#fff",
            padding: "12px 26px",
            border: "1px solid #fff",
            fontSize: "20px",
            transition: "all 0.3s ease-out",
            zIndex: 6,
            position: "relative",
          }}
          onClick={() => history.push("/contact")}
        >
          CHAT WITH US
        </button>
      </div>
      <Typed
        className="typed-text"
        strings={[
          "CONSULTANCY SERVICES",
          "DATA SERVICES",
          "TRAINING SERVICES",
          "RESEARCH SERVICES",
          "TECHNOLOGY SERVICES",
        ]}
        typeSpeed={150}
        backSpeed={150}
        loop
      />
    </div>
  );
}

export default HeroSection;
