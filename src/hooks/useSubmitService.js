import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSubmitService = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user } = useAuthContext();

  const submitService = async (
    id,
    category,
    serviceType,
    serviceTypeDetails,
    typeOfData,
    typeOfDataDescription,
    typeOfDataDescriptionDetails,
    startDate,
    endDate
  ) => {
    const serviceTypes = serviceType.toString();
    setIsLoading(true);
    setError(null);
    if (id) {
      const response = await fetch(
        "https://bigdataconsult.herokuapp.com/services/" + id,
        {
          method: "PATCH",
          body: JSON.stringify({
            id,
            category,
            serviceTypes,
            serviceTypeDetails,
            typeOfData,
            typeOfDataDescription,
            typeOfDataDescriptionDetails,
            startDate,
            endDate,
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
        // serviceType.length > 1;
        // ? navigate("/servicetypedetail")
        // : navigate("/order");
        setIsLoading(false);
      }
    }
    if (!id) {
      const response = await fetch(
        "https://bigdataconsult.herokuapp.com/services",
        {
          method: "POST",
          body: JSON.stringify({
            category,
            serviceTypes,
            serviceTypeDetails,
            typeOfData,
            typeOfDataDescription,
            typeOfDataDescriptionDetails,
            startDate,
            endDate,
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
        // serviceType.length > 1
        //   ? navigate("/servicetypedetail")
        //   : navigate("/order");
        setIsLoading(false);
      }
    }
  };
  return { submitService, error, isLoading, setError };
};
