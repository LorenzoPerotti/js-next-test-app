"use client";
import { useState } from "react";
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    function increaseCounter(count) {
        setCount(count+1)
    }

    function decreaseCounter(count) {
        setCount(count-1)
    }

    return (
        <div className="counter">
            <button onClick={() => increaseCounter(count)}>+</button>
            <span>{count}</span>
            <button onClick={() => decreaseCounter(count)}>-</button>
        </div>
    )
}


export default Counter;