import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      className="nav-container"
      initial={{ height: 80 }}
      animate={toggle ? { height: 500 } : { height: 80 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logocontainer">
        <div className="logo">
          <img src="images/bigdataconsult.png" alt="logo" />
          <h5>
            Consult <span>Limited</span>
          </h5>
        </div>

        <div className="menuiconbutton">
          <button
            className="hamburger"
            onClick={toggleNav}
            animate={toggle ? { z: 360 } : { z: -360 }}
            transition={{ duration: 3 }}
          >
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
            <motion.button
              initial={toggle ? { x: "100vw" } : { x: 0 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Services
            </motion.button>
            <motion.button
              initial={toggle ? { x: "-100vw" } : { x: 0 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Contact
            </motion.button>
            <motion.button
              initial={toggle ? { x: "100vw" } : { x: 0 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              About
            </motion.button>
            <motion.button
              initial={toggle ? { x: "-100vw" } : { x: 0 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Register
            </motion.button>
            <motion.button
              initial={toggle ? { x: "100vw" } : { x: 0 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              login
            </motion.button>
          </div>
          <div className="left-navlinks">
            <motion.input
              type="text"
              placeholder="Search ...."
              initial={toggle ? { x: "-100vw" } : { x: 0 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.button
              className="search"
              initial={toggle ? { x: "100vw" } : { x: 0 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <FontAwesomeIcon icon={faSearch} style={{ color: "darkred" }} />
            </motion.button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Nav;
