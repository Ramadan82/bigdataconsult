import React from "react";
import * as ReactDOM from "react-dom/client";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import App from "./App";
import ScrollToTop from "./helpers/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </AuthContextProvider>
);
