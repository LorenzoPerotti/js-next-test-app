"use client";
import { useEffect } from "react";

function useCounter() {
  useEffect(() => {
    const intervalID = setInterval(() => {
      const randNum = Math.floor(Math.random() * 100);
      console.log(`randNum: ${randNum}`);
    }, 1000);

    return () => clearInterval(intervalID); // Cleanup on unmount
  }, []);
}

export default useCounter;
