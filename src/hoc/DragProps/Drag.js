import React, { Component } from "react";
import { Draggable } from "gsap/all";

export default class Drag extends Component {
  state = {
    x: undefined,
    y: undefined
  };

  constructor(props) {
    super(props);
    this.elementRef = React.createRef();
  }

  componentDidMount = () =>
    new Draggable(this.elementRef.current, { onDrag: this.onDrag });

  onDrag = e => {
    const { x, y } = e.target.getBoundingClientRect();
    this.setState({ x: Math.floor(x), y: Math.floor(y) });
  };

  render = () => {
    const { x, y } = this.state;

    return (
      <span className="draggable_wrapper" ref={this.elementRef}>
        {this.props.children(x, y)}
      </span>
    );
  };
}
