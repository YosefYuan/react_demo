import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SetStateDemo from "./component/SetStateDemo";
import UseStateDemo from "./component/UseStateDemo";
import UseContext from "./component/UseContext";
import WithDraggable from "./hoc/WithDraggable";
import DragProps from "./hoc/DragProps";
import UseDrag from "./hoc/UseDrag";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/SetStateDemo"> SetStateDemo </Link>
        <Link to="/UseStateDemo"> UseStateDemo </Link>
        <Link to="/UseContext"> UseContext </Link>
        <Link to="/withDraggable">withDraggable</Link>
        <Link to="/DragProps">DragProps</Link>
        <Link to="/UseDrag">UseDrag</Link>
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
          key="UseContext"
          path="/UseContext"
          exact={true}
          component={UseContext}
        />
        <Route
          key="WithDraggable"
          path="/WithDraggable"
          exact={true}
          component={WithDraggable}
        />
        <Route
          key="DragProps"
          path="/DragProps"
          exact={true}
          component={DragProps}
        />
        <Route key="UseDrag" path="/UseDrag" exact={true} component={UseDrag} />
      </Switch>
    </Router>
  );
};

export default App;
