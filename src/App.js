import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SetStateDemo from "./component/SetStateDemo";
import UseStateDemo from "./component/UseStateDemo";

const App = () => {
  return (
    <Router>
      <Route
        key="home"
        path="/SetStateDemo"
        exact={true}
        component={SetStateDemo}
      />
      <Route
        key="home"
        path="/UseStateDemo"
        exact={true}
        component={UseStateDemo}
      />
    </Router>
  );
};

export default App;
