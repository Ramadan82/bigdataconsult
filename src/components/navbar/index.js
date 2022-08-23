import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [screenwidth, setScreenwidth] = useState(window.innerWidth);

  const toggleNav = (e) => setToggle(!toggle);

  useEffect(() => {
    const changeWidth = () => {
      setScreenwidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="nav-container">
      <div className="logocontainer">
        <div className="logo">
          <img src="images/bigdataconsult.png" alt="logo" />
          <h5>
            Consult <span>Limited</span>
          </h5>
        </div>

        <div className="menuiconbutton">
          <button className="hamburger" onClick={toggleNav}>
            <FontAwesomeIcon
              icon={!toggle ? faBars : faTimes}
              style={{ height: "30px", color: "darkred" }}
            />
          </button>
        </div>
      </div>
      {(toggle || screenwidth > 900) && (
        <>
          <div className="center-navlinks">
            <button>Services</button>
            <button>Contact</button>
            <button>About</button>
            <button>Register</button>
            <button>login</button>
          </div>
          <div className="left-navlinks">
            <input type="text" placeholder="Search ...." />
            <button className="search">
              <FontAwesomeIcon icon={faSearch} style={{ color: "darkred" }} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Nav;
