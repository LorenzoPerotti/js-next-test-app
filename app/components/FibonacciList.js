"use client";
import { useState } from "react";
import "./FibonacciList.css";

// Helper function!
function sumLastTwo(list) {
  const penultimate = list[list.length - 2];
  const last = list[list.length - 1];
  return [...list, penultimate + last];
}

function FibonacciList() {
  const [list, setList] = useState([1, 2]);

  return (
    <div className="fibonacci">
      <button onClick={() => setList(sumLastTwo(list))}>FibonaccIt!</button>
      {list.map((num, index) => (
        <span key={index}>{num}</span>
      ))}
    </div>
  );
}

export default FibonacciList;
