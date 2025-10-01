import React from "react";
import { StrictMode } from "react";
import TopBar from "./components/Topbar";
import Counter from "./components/Counter";
import FibonacciList from "./components/FibonacciList";

export default function Home() {
  return (
    <StrictMode>
      <TopBar title={"Homepage"} />
      <Counter />
      <FibonacciList />
    </StrictMode>
  );
}
