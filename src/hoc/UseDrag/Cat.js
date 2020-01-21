import React from "react";
import useDrag from "./useDrag";

const Cat = () => {
  const { x, y, dragRef } = useDrag();

  return (
    <span className="draggable_wrapper" ref={dragRef}>
      <span className="cat" role="img">
        <span> 🐱 </span>
        {x !== undefined && y !== undefined && (
          <span className="mouse__position"> {`(${x}, ${y})`} </span>
        )}
      </span>
    </span>
  );
};

export default Cat;
