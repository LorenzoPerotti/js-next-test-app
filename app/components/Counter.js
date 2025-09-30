"use client";
import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCounter(count) {
    setCount(count + 1);
  }

  function decreaseCounter(count) {
    setCount(count - 1);
  }

  return (
    <>
      <div className="counter">
        <button onClick={() => increaseCounter(count)}>+</button>
        <span>{count}</span>
        <div className="counter-right">
          <button onClick={() => decreaseCounter(count)}>-</button>
          <span className="counter-warning">
            {count > 10 ? "It's over 10!" : ""}
          </span>
        </div>
      </div>
    </>
  );
}

export default Counter;
