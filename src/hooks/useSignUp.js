import { useState } from "react";
import { useNavigate } from "react-router";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();

  const signUp = async (
    firstname,
    lastname,
    email,
    password,
    confirmPassword
  ) => {
    setError("");
    setIsLoading(true);
    if (confirmPassword !== password) {
      return setError("passwords don't match");
    }

    const response = await fetch(
      "https://bigdataconsult.herokuapp.com/user/register",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ firstname, lastname, email, password }),
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

  return { signUp, error, isLoading };
};
