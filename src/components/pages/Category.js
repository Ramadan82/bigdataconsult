import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Category.css";
import { useState, useEffect } from "react";
import AccountDrawer from "../AccountDrawer";
import { Avatar } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../hooks/useAuthContext";

const Category = ({ addCategory, service, setService }) => {
  const { user } = useAuthContext();

  const [screenwidth, setScreenwidth] = useState(window.innerWidth);
  const initialState = screenwidth > 950 ? true : false;
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const id = location.state;

  useEffect(() => {
    const changeWidth = () => {
      setScreenwidth(window.innerWidth);
    };

    setIsOpen(screenwidth > 950 ? true : false);

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [screenwidth]);

  const [isOpen, setIsOpen] = useState(initialState);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setToggle(!toggle);
  };

  const categories = [
    "Personal",
    "Organizational",
    "Business Enterprise",
    "Governmental",
  ];
  return (
    <div className="main-container">
      {user && (
        <main>
          <div className="account-header">
            <div className="header-text">
              <h2>Welcome</h2>
            </div>
            <div className="header-text2">
              <h2>{user.name}</h2>
            </div>
            <div
              className="header-image"
              onClick={handleClick}
              tabIndex={0}
              role="button"
            >
              {!toggle ? (
                <>
                  <div>
                    <Avatar />
                  </div>
                  <div className="header-user">
                    <span>{user.name}</span>
                    <span>edit</span>
                  </div>
                </>
              ) : (
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{ height: "40px", color: "white" }}
                />
              )}
            </div>
          </div>
          <AccountDrawer isOpen={isOpen} user={user} />
          <div className="categories-container">
            <h3>Step 1: Choose your Category</h3>
            <ul className="categories">
              {categories.map((category) => {
                let spanClass = service.category === category ? "active" : "";
                return (
                  <li
                    key={category}
                    onClick={() => addCategory(category, id)}
                    className="categories-list"
                  >
                    <span className={spanClass}>{category}</span>
                  </li>
                );
              })}
            </ul>
            {service.category && (
              <div className="next">
                <Link to="/servicetypes">
                  <button className="categories-button">Next</button>
                </Link>
              </div>
            )}
          </div>
        </main>
      )}
    </div>
  );
};

export default Category;
