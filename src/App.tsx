import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router/Routes";
import SubRouter from "./router/SubRouter";
import "./styles.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Router>
      <SubRouter routes={Routes} />
    </Router>
  );
};

export default App;
