import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

const tag = <strong>Hello world</strong>;

const el = document.getElementById("root");
ReactDOM.render(<div>{tag}</div>, el);
