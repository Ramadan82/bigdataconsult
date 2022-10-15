import React from "react";
import { Link } from "react-router-dom";
import "./ServiceTypes.css";
import AccountDrawer from "../AccountDrawer";
import { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../hooks/useAuthContext";

const ServiceTypes = ({ addServiceType, service }) => {
  const { user } = useAuthContext();

  const [screenwidth, setScreenwidth] = useState(window.innerWidth);
  const initialState = screenwidth > 950 ? true : false;
  const [toggle, setToggle] = useState(false);

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

  let serviceTypes = [
    "Data Services",
    "Consultancy Services",
    "Training Services",
    "Research Services",
    "Technology Services",
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
          <div className="service-types-container">
            <h3>Step 2: Choose Service Type(s)</h3>
            <ul className="service-types">
              {serviceTypes.map((serviceType) => {
                let spanClass = service.serviceTypes.includes(serviceType)
                  ? "active"
                  : "";
                return (
                  <li
                    key={serviceType}
                    className="service-types-list"
                    onClick={() => addServiceType(serviceType)}
                  >
                    <span className={spanClass}>{serviceType}</span>
                  </li>
                );
              })}
            </ul>
            {service.serviceTypes.includes("Data Services") ? (
              <Link to="/serviceform">
                <button className="service-types-button">Next</button>
              </Link>
            ) : (
              service.serviceTypes.length >= 1 && (
                <Link to="/servicetypedetail">
                  <button className="service-types-button">Next</button>
                </Link>
              )
            )}
          </div>
        </main>
      )}
    </div>
  );
};

export default ServiceTypes;
