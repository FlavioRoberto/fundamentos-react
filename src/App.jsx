import React from "react";
import First from "./components/basics/First";
import WithParameter from "./components/basics/WithParameter";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import Card from "./components/layouts/Card/Card";
import "./App.css";

const App = () => (
  <div id="app">
    <h1>React essentials</h1>
    <div className="content">
      <Card title="Random numbers">
        <Random min={1} max={5} />
      </Card>

      <Card title="Fragment">
        <Fragment />
      </Card>

      <Card title="With parameter">
        <WithParameter title="second component" subtitle="Very nice!" />
      </Card>

      <Card title="First component">
        <First />
      </Card>
    </div>
  </div>
);

export default App;
