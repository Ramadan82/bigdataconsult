import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { format } from "date-fns";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import "./DeleteService.css";
import "./ServiceTypes.css";
import { useNavigate } from "react-router";
import DeleteIcon from "@mui/icons-material/Delete";
import { MDBSpinner } from "mdb-react-ui-kit";
import AccountDrawer from "../AccountDrawer";
import { Avatar } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const DeleteService = () => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [hasService, setHasService] = useState(false);

  const [screenwidth, setScreenwidth] = useState(window.innerWidth);
  const initialState = screenwidth > 950 ? true : false;
  const [toggle, setToggle] = useState(false);
  const [service, setService] = useState({
    services: null,
  });

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

  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true);
      const response = await fetch("/services", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        json.length > 0 && setHasService(true);
        setService({
          services: json,
        });
        setIsLoading(false);
      }
    };
    if (user) {
      fetchServices();
    }
  }, [user, setService]);
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    navigate("/account");
  };

  return (
    <div className="delete-service-main-container">
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
            {!isLoading && hasService && (
              <h3>Delete Your Service by clicking on the trash icon</h3>
            )}

            {!isLoading && !hasService && (
              <h3>No Service Created. Please create your service</h3>
            )}

            <div>
              {isLoading && (
                <div className="delete-services-loading">
                  <MDBSpinner
                    size="lg"
                    role="status"
                    tag="span"
                    className="me-2"
                  />
                </div>
              )}
              {service.services &&
                service.services.map((serv) => {
                  const {
                    category,
                    serviceTypes,
                    serviceTypeDetails,
                    typeOfData,
                    typeOfDataDescription,
                    typeOfDataDescriptionDetails,
                    startDate,
                    endDate,
                    createdAt,
                  } = serv;
                  const handleClick = async (e) => {
                    const response = await fetch("/services/" + serv._id, {
                      method: "DELETE",
                      headers: {
                        Authorization: `Bearer ${user.token}`,
                      },
                    });
                    const json = await response.json();
                    if (response.ok) {
                      setService({
                        services: service.services.filter(
                          (s) => s._id !== json._id
                        ),
                      });
                    }
                  };
                  return (
                    <div className="delete-service-container">
                      <div key={serv._id} className="delete-service">
                        <div>
                          <h5>
                            Service created{" "}
                            {formatDistanceToNow(new Date(createdAt), {
                              addSuffix: true,
                            })}{" "}
                          </h5>
                          <p>
                            <strong>Category: {""}</strong>
                            {category}
                          </p>
                          {""}
                          <p>
                            {" "}
                            <strong>Type(s): {""}</strong>
                            {serviceTypes}
                          </p>
                          {""}
                          {serviceTypeDetails && (
                            <p>
                              {" "}
                              <strong>
                                {serviceTypes}&nbsp;Field: {""}
                              </strong>
                              {serviceTypeDetails}
                            </p>
                          )}
                          {""}
                          {typeOfData && (
                            <p>
                              <strong>Type of Data: {""}</strong>
                              {typeOfData}
                            </p>
                          )}
                          {""}
                          {typeOfDataDescription && (
                            <>
                              {typeOfData === "Financial Data" ? (
                                <p>
                                  <strong>Sector:</strong> &nbsp;{" "}
                                  {typeOfDataDescription}
                                </p>
                              ) : (
                                <p>
                                  <strong>Region: </strong>&nbsp;{" "}
                                  {typeOfDataDescription}
                                </p>
                              )}
                            </>
                          )}

                          {""}
                          {typeOfDataDescriptionDetails && (
                            <p>
                              <strong>Other Deatails: </strong>
                              {""}
                              {typeOfDataDescriptionDetails}
                            </p>
                          )}
                          {startDate && (
                            <div>
                              <p>
                                <strong>Data Date Range</strong>
                              </p>
                              <p>
                                {" "}
                                <strong>from: </strong>
                                {""}
                                {format(new Date(startDate), "MM/dd/yyyy")}
                                {""}
                                {endDate && (
                                  <span>
                                    &nbsp;<strong> to: </strong>
                                    {""}
                                    {format(new Date(endDate), "MM/dd/yyyy")}
                                  </span>
                                )}
                              </p>
                            </div>
                          )}
                        </div>
                        <span className="delete-icon" onClick={handleClick}>
                          <DeleteIcon style={{ color: "red" }} />
                        </span>
                      </div>
                    </div>
                  );
                })}
              <div className="back-to-account-container">
                <button className="back-to-account" onClick={handleNavigate}>
                  Back
                </button>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default DeleteService;
