import React, { useState, useEffect } from "react";

const UseStateDemo = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("执行...", count);
    return () => {
      console.log("清理...", count);
    };
  }, [count]);
  return (
    <div>
      <p>
        You clicked {count}
        times
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default UseStateDemo;
