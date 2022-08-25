import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "./assets/particlesConfig.json";

// import Navbar from './components/Navbar';
import Nav from "./components/navbar/index";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import Footer from "../src/components/Footer";

function App() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  return (
    <>
      <Router>
        <Particles
          init={particlesInit}
          className="tsparticles"
          options={particleConfig}
        />
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
