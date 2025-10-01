"use client";
import { useState, useEffect } from "react";
import "./ApiCallCmp.css";

function getData(setData) {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      console.log(data);
    });
}

function ApiCallCmp() {
  const [data, setData] = useState(null);

  //data.map if data is an array
  return (
    <div className="api-call-cmp">
      <button onClick={() => getData(setData)}>Get API Data</button>
      <div>
        <p>{data ? "id: " + data.id : ""}</p>
        <p>{data ? "title: " + data.title : ""}</p>
        <p>{data ? "body: " + data.body : ""}</p>
      </div>
    </div>
  );
}

export default ApiCallCmp;
