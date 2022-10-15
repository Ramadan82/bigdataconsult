import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "../components/navbar/index";
import Footer from "../components/Footer";

// If you use CSS/SCSS vs. styled components

function Layout() {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
