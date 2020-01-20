import React, { Component } from "react";

class Mouse extends Component {
  render() {
    const { x, y } = this.props;

    return (
      <div className="cat" role="img">
        <span>🐱</span>
        {x !== undefined && y !== undefined && (
          <span className="mouse__position"> {`(${x}, ${y})`} </span>
        )}
      </div>
    );
  }
}

export default Mouse;
