import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SetStateDemo from "./component/SetStateDemo";
import UseStateDemo from "./component/UseStateDemo";
import { WithDraggableDemo01 } from "./component/WithDraggable";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/SetStateDemo"> SetStateDemo </Link>
        <Link to="/UseStateDemo"> UseStateDemo </Link>
        <Link to="/withDraggableDemo01">withDraggableDemo01</Link>
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
          key="WithDraggableDemo01"
          path="/WithDraggableDemo01"
          exact={true}
          component={WithDraggableDemo01}
        />
      </Switch>
    </Router>
  );
};

export default App;
