import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Mouse from "./Mouse";
import Cat from "./Cat";

import "./style.css";

class withDraggableWrap extends Component {
  render() {
    return (
      <div className="withDraggableWrap">
        <Mouse />
        <Cat />
      </div>
    );
  }
}
export default withDraggableWrap;
