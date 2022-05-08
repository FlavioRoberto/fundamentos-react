import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import First from "./components/basics/First";
import WithParameter from "./components/basics/WithParameter";
import Fragment from "./components/basics/Fragment";

const el = document.getElementById("root");
ReactDOM.render(
  <div>
    <First />
    <WithParameter title="second component" subtitle="Very nice!" />
    <Fragment />
  </div>,
  el
);
