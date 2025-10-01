import React from "react";
import { StrictMode } from "react";
import TopBar from "./components/Topbar";
import Counter from "./components/Counter";
import FibonacciList from "./components/FibonacciList";
import UseEffectCmp from "./components/UseEffectCmp";
import ApiCallCmp from "./components/ApiCallCmp";

export default function Home() {
  return (
    <StrictMode>
      <TopBar title={"Homepage"} />
      <Counter />
      <FibonacciList />
      <UseEffectCmp />
      <ApiCallCmp />
    </StrictMode>
  );
}
