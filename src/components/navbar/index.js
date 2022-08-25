import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      animate={toggle ? { height: 600 } : { height: 80 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logocontainer">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <img src="images/bigdataconsult.png" alt="logo" />
            <h5>
              Consult <span>Limited</span>
            </h5>
          </Link>
        </div>

        <div className="menuiconbutton">
          <button
            className="hamburger"
            onClick={screenwidth < 900 && toggleNav}
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
              initial={toggle ? { x: "-100vw" } : { x: 0 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              onClick={screenwidth < 900 && toggleNav}
            >
              <Link to="/" style={{ textDecoration: "none", color: "darkred" }}>
                Home
              </Link>
            </motion.button>
            <motion.button
              initial={toggle ? { x: "100vw" } : { x: 0 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              onClick={screenwidth < 900 && toggleNav}
            >
              <Link
                to="/services"
                style={{ textDecoration: "none", color: "darkred" }}
              >
                Services
              </Link>
            </motion.button>
            <motion.button
              initial={toggle ? { x: "-100vw" } : { x: 0 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              onClick={screenwidth < 900 && toggleNav}
            >
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "darkred" }}
              >
                Contact
              </Link>
            </motion.button>
            <motion.button
              initial={toggle ? { x: "100vw" } : { x: 0 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              onClick={screenwidth < 900 && toggleNav}
            >
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "darkred" }}
              >
                About
              </Link>
            </motion.button>
            <motion.button
              initial={toggle ? { x: "-100vw" } : { x: 0 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              onClick={screenwidth < 900 && toggleNav}
            >
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "darkred" }}
              >
                Register
              </Link>
            </motion.button>
            <motion.button
              initial={toggle ? { x: "100vw" } : { x: 0 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onClick={screenwidth < 900 && toggleNav}
            >
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "darkred" }}
              >
                login
              </Link>
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
              onClick={screenwidth < 900 && toggleNav}
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
