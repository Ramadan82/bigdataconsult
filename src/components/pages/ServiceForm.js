import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSpinner,
  MDBValidation,
} from "mdb-react-ui-kit";
import React from "react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { Avatar } from "@mui/material";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./ServiceTypeDetail.css";
import AccountDrawer from "../AccountDrawer";
import { Link, useNavigate } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import "./ServiceForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSubmitService } from "../../hooks/useSubmitService";

const ServiceForm = ({
  service,
  values,
  addData,
  setValues,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const { user } = useAuthContext();
  const { submitService, error, isLoading, setError } = useSubmitService();
  const navigate = useNavigate();

  const [screenwidth, setScreenwidth] = useState(window.innerWidth);
  const initialState = screenwidth > 950 ? true : false;
  const [toggle, setToggle] = useState(false);
  //   const [values, setValues] = useState({
  //     typeOfData: "",
  //     typeOfDataDescription: "",
  //     typeOfDataDescriptionDetails: "",
  //   });
  const { typeOfData, typeOfDataDescription, typeOfDataDescriptionDetails } =
    values;
  const { id, category, serviceTypes, serviceTypeDetails } = service;

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

  //   const [startDate, setStartDate] = useState(new Date());
  //   const [endDate, setEndDate] = useState(new Date());
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!typeOfDataDescription) {
      typeOfData === "Financial Data"
        ? setError("Sector is required")
        : setError("Region is required");
      return setError;
    }
    if (serviceTypes.length > 1) {
      addData(
        typeOfData,
        typeOfDataDescription,
        typeOfDataDescriptionDetails,
        startDate,
        endDate
      );
      navigate("/servicetypedetail");
    }
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

          <div
            className="service-form-container"
            style={{
              margin: "auto",
              padding: "16px",
              maxWidth: "450px",
              alignContent: "center",
            }}
          >
            <MDBCard>
              <h5
                style={{
                  textAlign: "center",
                  lineHeight: "30px",
                  color: "darkred",
                }}
              >
                Select the type of data you want. Decscribe the sector/region,
                other details and period
              </h5>

              <MDBCardBody>
                <MDBValidation
                  onSubmit={handleSubmit}
                  noValidate
                  className="row g-3 "
                >
                  <div className="col-md-12">
                    <select
                      style={{
                        padding: "11px",
                        width: "100%",
                        borderRadius: "5px",
                      }}
                      onChange={handleChange}
                      name="typeOfData"
                      value={typeOfData}
                      required={true}
                    >
                      <option value="Select">Select</option>

                      <option value="Financial Data">Financial Data</option>
                      <option value="Commodity Data">Commodity Data</option>
                    </select>
                  </div>
                  {typeOfData && (
                    <>
                      <div className="col-md-12" style={{}}>
                        <MDBInput
                          style={{ padding: "10px" }}
                          label={
                            typeOfData === "Financial Data"
                              ? "Sector"
                              : "Region"
                          }
                          onChange={handleChange}
                          name="typeOfDataDescription"
                          value={typeOfDataDescription}
                          required={true}
                        />
                      </div>
                      <div className="col-md-12" style={{}}>
                        <MDBInput
                          style={{ padding: "10px" }}
                          label="Other Details"
                          onChange={handleChange}
                          name="typeOfDataDescriptionDetails"
                          value={typeOfDataDescriptionDetails}
                        />
                      </div>
                      <div className="col-md-12" style={{}}>
                        <h6 style={{ color: "darkred" }}>From</h6>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          style={{ width: "100%" }}
                        />

                        <h6 style={{ color: "darkred" }}>To</h6>
                        <DatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          style={{}}
                        />
                      </div>
                      <div className="col-md-12">
                        <MDBBtn
                          className="mb-4 w-100 "
                          style={{ backgroundColor: "darkred" }}
                          type="submit"
                        >
                          {isLoading && (
                            <MDBSpinner
                              size="sm"
                              role="status"
                              tag="span"
                              className="me-2"
                            />
                          )}
                          Submit
                        </MDBBtn>
                        {error && (
                          <span
                            className="inputVal text-danger mb-4"
                            style={{
                              border: "1px solid red",
                              padding: "15px",
                              borderRadius: "5px",
                            }}
                          >
                            {" "}
                            {error}
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </MDBValidation>
              </MDBCardBody>
            </MDBCard>
          </div>
        </main>
      )}
    </div>
  );
};

export default ServiceForm;
