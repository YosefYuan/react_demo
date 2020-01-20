import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Mouse from "./Mouse";
import Cat from "./Cat";
import Drag from "./Drag";

import "./style.css";

class DragProps extends Component {
  render() {
    return (
      <div className="DragProps">
        <Drag key={0}>{(x, y) => <Mouse x={x} y={y} />}</Drag>
        <Drag key={1}>{(x, y) => <Cat x={x} y={y} />}</Drag>
      </div>
    );
  }
}
export default DragProps;
