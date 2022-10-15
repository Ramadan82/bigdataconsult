import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ showModal }) => {
  return (
    <div>
      {showModal && (
        <div>
          <p>Want to make another Service?</p>
          <Link to="/account">
            <button>Start Again</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Modal;
