import { Avatar } from "@mui/material";
import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./Account.css";
import AccountDrawer from "../AccountDrawer";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const DeleteMyAccount = () => {
  const { user, dispatch } = useAuthContext();
  const [screenwidth, setScreenwidth] = useState(window.innerWidth);
  const initialState = screenwidth > 950 ? true : false;
  const [toggle, setToggle] = useState(false);
  const locacation = useLocation();
  const id = locacation.state;
  console.log(id);
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
  const handleDeleteAccount = async (e) => {
    const deleteAllServicesResponse = await fetch(
      "https://bigdataconsult.herokuapp.com/services/services",
      {
        method: "DELETE",

        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    if (deleteAllServicesResponse.ok) {
      const response = await fetch(
        "https://bigdataconsult.herokuapp.com/services/user/" + user.token,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (response.ok) {
        dispatch({ type: "LOGOUT" });
      }
    }
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
          <div className="main-body">
            <h5>
              By deleting your account you will No longer have access to your
              services and the ability to create another service
            </h5>
            <div className="delete-my-account-container">
              <button onClick={handleDeleteAccount}>Delete My Account</button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default DeleteMyAccount;
