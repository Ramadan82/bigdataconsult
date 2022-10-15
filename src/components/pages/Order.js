import { Avatar } from "@mui/material";
import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./ServiceTypeDetail.css";
import AccountDrawer from "../AccountDrawer";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Order = ({ service, setService }) => {
  const { user } = useAuthContext();

  const [screenwidth, setScreenwidth] = useState(window.innerWidth);
  const initialState = screenwidth > 950 ? true : false;
  const [toggle, setToggle] = useState(false);
  const [currentService, setCurrentService] = useState({ ...service });
  const navigate = useNavigate();

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
  const handleStartAgain = (e) => {
    setService({
      category: "",
      serviceTypes: [],
      serviceTypeDetail: "",
      typeOfData: "",
      typeOfDataDescription: "",
      typeOfDataDescriptionDetails: "",
      startDate: "",
      endDate: "",
    });
    navigate("/account");
  };

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
            <h2>Thank you for your order: </h2>
            <p>You ordered {currentService.category} service for our:</p>
            <div>
              {currentService.serviceTypes.map((serviceType) => (
                <div key={serviceType}> {serviceType} solution</div>
              ))}
            </div>

            <p>We will get in touch with you within the next 24 hours</p>
            <p>
              You can also check the details of this order in the My Services
              secton under the edit icon
            </p>
            <p>Want to order for another service ?</p>
            <button className="order-start-again" onClick={handleStartAgain}>
              Start Again{" "}
            </button>
          </div>
        </main>
      )}
    </div>
  );
};

export default Order;
