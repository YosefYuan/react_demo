import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SetStateDemo from "./component/SetStateDemo";
import UseStateDemo from "./component/UseStateDemo";
import WithDraggable from "./component/WithDraggable";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/SetStateDemo"> SetStateDemo </Link>
        <Link to="/UseStateDemo"> UseStateDemo </Link>
        <Link to="/withDraggable">withDraggable</Link>
      </div>
      <Switch>
        <Route
          key="SetStateDemo"
          path="/SetStateDemo"
          exact={true}
          component={SetStateDemo}
        />
        <Route
          key="UseStateDemo"
          path="/UseStateDemo"
          exact={true}
          component={UseStateDemo}
        />
        <Route
          key="WithDraggable"
          path="/WithDraggable"
          exact={true}
          component={WithDraggable}
        />
      </Switch>
    </Router>
  );
};

export default App;
