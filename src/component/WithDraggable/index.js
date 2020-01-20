import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Mouse from "./Mouse";
import Cat from "./Cat";

import "./style.css";

class WithDraggable extends Component {
  render() {
    return (
      <div className="WithDraggable">
        <Mouse />
        <Cat />
      </div>
    );
  }
}
export default WithDraggable;
