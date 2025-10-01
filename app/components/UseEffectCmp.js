"use client";
import React, { useEffect, useState } from "react";
import "./UseEffectCmp.css";

function UseEffectCmp() {
  const [count, setCount] = useState(0);

  // when count changes, this function is called!
  useEffect(() => {
    console.log(`USE EFFECT! Count : ${count}`);
  }, [count]);
  // }, []); // this make it only run once on mount

  return (
    <div className="use-effect-cmp">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <span>Current count: {count}</span>
    </div>
  );
}

export default UseEffectCmp;
