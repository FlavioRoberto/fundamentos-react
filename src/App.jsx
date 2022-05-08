import React from "react";
import First from "./components/basics/First";
import WithParameter from "./components/basics/WithParameter";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";

const App = () => (
  <div id="app">
    <h1>React essentials</h1>
    <Random min={1} max={5} />
    <First />
    <WithParameter title="second component" subtitle="Very nice!" />
    <Fragment />
  </div>
);

export default App;
