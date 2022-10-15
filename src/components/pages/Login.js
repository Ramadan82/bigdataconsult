import React, { useState } from "react";
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
import { useLogin } from "../../hooks/useLogin";

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const [formValues, setFormValues] = useState(initialValues);
  const { email, password } = formValues;
  const { login, error, isLoading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
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

              <p>Please login to your account</p>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                name="email"
                type="email"
                value={email.toLowerCase()}
                onChange={handleInputChange}
                required={error && true}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={handleInputChange}
                required={error && true}
                noValidate
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
                  {" "}
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
                  Sign in
                </MDBBtn>

                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <Link to="/register">
                  <MDBBtn
                    outline
                    className="mx-2"
                    style={{ color: "darkred", border: "1px solid darkred" }}
                  >
                    Register Now
                  </MDBBtn>
                </Link>
              </div>
            </div>
          </MDBValidation>
        </MDBCol>

        <MDBCol col="6" className="mb-5" style={{ backgroundColor: "darkred" }}>
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
