import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SetStateDemo from "./component/SetStateDemo";
import UseStateDemo from "./component/UseStateDemo";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/SetStateDemo">SetStateDemo</Link>
        <Link to="/UseStateDemo">UseStateDemo</Link>
      </div>
      <Switch>
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
      </Switch>
    </Router>
  );
};

export default App;
