import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "./assets/particlesConfig.json";

import "./App.css";
import Home from "./components/pages/Home";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Account from "./components/pages/Account";

import Layout from "./components/Layout";
import { useAuthContext } from "./hooks/useAuthContext";
import { CssBaseline } from "@mui/material";
import Category from "./components/pages/Category";
import ServiceTypes from "./components/pages/ServiceTypes";
import Modal from "./components/Modal";
import Order from "./components/pages/Order";
import SeerviceTypeDetail from "./components/pages/ServiceTypeDetail";
import ServiceForm from "./components/pages/ServiceForm";
import DeleteService from "./components/pages/DeleteService";
import MyServices from "./components/pages/MyServices";
import EditServices from "./components/pages/EditServices";
import EditMyAccount from "./components/pages/EditMyAccount";
import DeleteMyAccount from "./components/pages/DeleteMyAccount";

const ProtectedRoute = () => {
  const { user } = useAuthContext();
  const redirectPath = "/";
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
function App() {
  // const particlesInit = async (main) => {
  //   console.log(main);
  //   await loadFull(main);
  // };
  const [service, setService] = useState({
    id: "",
    category: "",
    serviceTypes: [],
    serviceTypeDetail: "",
    typeOfData: "",
    typeOfDataDescription: "",
    typeOfDataDescriptionDetails: "",
    startDate: "",
    endDate: "",
  });
  const [values, setValues] = useState({
    typeOfData: "",
    typeOfDataDescription: "",
    typeOfDataDescriptionDetails: "",
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const addCategory = (category, id) => {
    setService({ ...service, id, category });
  };
  // const addId = (id) => {
  //   setService({ ...service, id });
  // };
  const addServiceType = (serviceType) => {
    let newServiceType;
    if (!service.serviceTypes.includes(serviceType)) {
      newServiceType = [...service.serviceTypes, serviceType];
    } else {
      newServiceType = service.serviceTypes.filter(
        (item) => item !== serviceType
      );
    }
    setService({ ...service, serviceTypes: newServiceType });
  };
  const addData = (
    typeOfData,
    typeOfDataDescription,
    typeOfDataDescriptionDetails,
    startDate,
    endDate
  ) => {
    setService({
      ...service,
      typeOfData,
      typeOfDataDescription,
      typeOfDataDescriptionDetails,
      startDate,
      endDate,
    });
  };

  const addServiceTypeDetails = (serviceTypeDetails) => {
    setService({ ...service, serviceTypeDetails });
  };

  return (
    <div>
      <CssBaseline />
      <Modal showModal={showModal} />
      {/* <Particles
        init={particlesInit}
        className="tsparticles"
        options={particleConfig}
      /> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<Account />} />
            <Route path="/:id" element={<Service />} />
            <Route
              path="/category"
              element={
                <Category
                  addCategory={addCategory}
                  service={service}
                  setService={setService}
                />
              }
            />
            <Route
              path="/servicetypes"
              element={
                <ServiceTypes
                  addServiceType={addServiceType}
                  service={service}
                />
              }
            />
            <Route
              path="/servicetypedetail"
              element={
                <SeerviceTypeDetail
                  service={service}
                  addServiceTypeDetails={addServiceTypeDetails}
                />
              }
            />
            <Route
              path="/order"
              element={
                <Order
                  setShowModal={setShowModal}
                  service={service}
                  setService={setService}
                />
              }
            />
            <Route
              path="/serviceform"
              element={
                <ServiceForm
                  service={service}
                  addData={addData}
                  values={values}
                  setValues={setValues}
                  startDate={startDate}
                  setStartDate={setStartDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                />
              }
            />
            <Route path="/deleteservice" element={<DeleteService />} />
            <Route path="/myservices" element={<MyServices />} />
            <Route path="/editservice" element={<EditServices />} />
            <Route path="/editaccount" element={<EditMyAccount />} />
            <Route path="/deletemyaccount" element={<DeleteMyAccount />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
