import React, { useState, useEffect } from "react";
import "./Login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBValidation,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

function EditMyAccount() {
  const { user } = useAuthContext();

  const intialValues = {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(intialValues);
  const { firstname, lastname, email, password, confirmPassword } = formValues;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userDetail, setUserDetail] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://bigdataconsult.herokuapp.com/user/" + user.token,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await response.json();
      if (response.ok) {
        setUserDetail(json);
        setIsLoading(false);
      }
    };
    if (user) {
      fetchUser();
    }
  }, [user, setUserDetail]);

  const hanleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (confirmPassword !== password) {
      return setError("passwords don't match");
    }

    const response = await fetch(
      "https://bigdataconsult.herokuapp.com/user/" + user.token,
      {
        method: "PATCH",
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
        }),
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json",
        },
      }
    );

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setIsLoading(false);
    }
    if (response.ok) {
      setIsLoading(false);
      navigate("/login");
    }
  };
  return (
    <>
      {isLoading && (
        <div className="delete-services-loading">
          <MDBSpinner size="lg" role="status" tag="span" className="me-2" />
        </div>
      )}
      {userDetail && (
        <MDBContainer className="my-5 gradient-form">
          <MDBRow style={{ zIndex: 3, position: "relative" }}>
            <MDBCol col="6" className="mb-5" style={{ marginRight: "50px" }}>
              <MDBValidation onSubmit={handleSubmit} noValidate>
                <div className="d-flex flex-column ms-5">
                  <div className="text-center">
                    <img
                      src="images/bigdataconsult.png"
                      style={{ width: "185px" }}
                      alt="logo"
                    />
                    <h4 className="mt-1 mb-5 pb-1">
                      Consult <span style={{ color: "darkred" }}>Limited</span>
                    </h4>
                  </div>

                  <p>Edit Your Details</p>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label={userDetail.firstname}
                      name="firstname"
                      type="text"
                      onChange={hanleInputChange}
                      value={firstname}
                      required={error && true}
                    />
                  </MDBCol>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label={userDetail.lastname}
                      name="lastname"
                      type="text"
                      onChange={hanleInputChange}
                      value={lastname}
                      required={error && true}
                    />
                  </MDBCol>

                  <MDBInput
                    wrapperClass="mb-4"
                    label={userDetail.email}
                    name="email"
                    type="email"
                    onChange={hanleInputChange}
                    value={email}
                    required={error && true}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    name="password"
                    type="password"
                    onChange={hanleInputChange}
                    value={password}
                    required={error && true}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    onChange={hanleInputChange}
                    value={confirmPassword}
                    required={error && true}
                  />
                  {error && (
                    <span
                      className="inputVal text-danger mb-4"
                      style={{
                        border: "1px solid red",
                        padding: "15px",
                        borderRadius: "5px",
                      }}
                    >
                      {error}
                    </span>
                  )}
                  <div className="text-center pt-1 mb-5 pb-1">
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
                  </div>

                  <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                    <p className="mb-0">
                      You have to login with your updated credentials
                    </p>
                    <Link to="/login">
                      <MDBBtn
                        outline
                        className="mx-2"
                        style={{
                          color: "darkred",
                          border: "1px solid darkred",
                        }}
                      >
                        proceed to Login
                      </MDBBtn>
                    </Link>
                  </div>
                </div>
              </MDBValidation>
            </MDBCol>

            <MDBCol
              col="6"
              className="mb-5"
              style={{ backgroundColor: "darkred" }}
            >
              <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">We are more than just a company</h4>
                  <p class="small mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}
    </>
  );
}

export default EditMyAccount;
