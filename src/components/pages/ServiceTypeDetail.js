import { Avatar } from "@mui/material";
import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./ServiceTypeDetail.css";
import AccountDrawer from "../AccountDrawer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSubmitService } from "../../hooks/useSubmitService";
import { MDBSpinner } from "mdb-react-ui-kit";

const SeerviceTypeDetail = ({ service, addServiceTypeDetails }) => {
  const { user } = useAuthContext();
  const { submitService, error, isLoading } = useSubmitService();
  const [screenwidth, setScreenwidth] = useState(window.innerWidth);
  const initialState = screenwidth > 950 ? true : false;
  const [toggle, setToggle] = useState(false);
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

  const serviceTypeDetails = [
    "Economics",
    "Accounting",
    "Business",
    "Information Technology",
  ];
  const handleServiceSubmission = async (e) => {
    const {
      id,
      category,
      serviceTypes,
      serviceTypeDetails,
      typeOfData,
      typeOfDataDescription,
      typeOfDataDescriptionDetails,
      startDate,
      endDate,
    } = service;
    await submitService(
      id,
      category,
      serviceTypes,
      serviceTypeDetails,
      typeOfData,
      typeOfDataDescription,
      typeOfDataDescriptionDetails,
      startDate,
      endDate
    );

    navigate("/order");
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
            <h3>Step 3: Choose Service Field</h3>
            <ul className="service-types">
              {serviceTypeDetails.map((serviceTypeDetail) => {
                let spanClass =
                  service.serviceTypeDetails === serviceTypeDetail
                    ? "active"
                    : "";

                return (
                  <li
                    key={serviceTypeDetail}
                    className="service-types-list"
                    onClick={() => addServiceTypeDetails(serviceTypeDetail)}
                  >
                    <span className={spanClass}>{serviceTypeDetail}</span>
                  </li>
                );
              })}
            </ul>
            {service.serviceTypeDetails && (
              <div className="next">
                <button
                  className="categories-button"
                  onClick={handleServiceSubmission}
                >
                  {isLoading && (
                    <MDBSpinner
                      size="sm"
                      role="status"
                      tag="span"
                      className="me-2"
                    />
                  )}
                  Next
                </button>
                {error && (
                  <span
                    className="inputVal text-danger mb-4"
                    style={{
                      border: "1px solid red",
                      padding: "15px",
                      borderRadius: "5px",
                      backgroundColor: "white",
                    }}
                  >
                    {" "}
                    {error}
                  </span>
                )}
              </div>
            )}
          </div>
        </main>
      )}
    </div>
  );
};

export default SeerviceTypeDetail;
