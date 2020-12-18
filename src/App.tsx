import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router/Routes";
import SubRouter from "./router/SubRouter";
import "./styles.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <SubRouter routes={Routes} />
      </Router>
    </Provider>
  );
};

export default App;
