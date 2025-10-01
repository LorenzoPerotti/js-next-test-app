"use client";
import React, { useContext, useState } from "react";
import TopBar from "../components/Topbar";
import { TestContext } from "../components/stores/TestContext";
import useCounter from "../hooks/useCounter";

export default function About() {
  useCounter();

  const testContext = useContext(TestContext);
  const [state, setState] = useState(testContext);

  return (
    <TestContext.Provider value={{ state, setState }}>
      <TopBar title={"About"} />
      <h1>Check the console!</h1>
    </TestContext.Provider>
  );
}
