import React from "react";
import "./App.css";
import First from "./components/basics/First";
import WithParameter from "./components/basics/WithParameter";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import Card from "./components/layouts/Card/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import StudentsLists from "./components/Loop/StudentsList";

const App = () => (
  <div id="app">
    <h1>React essentials</h1>
    <div className="content">
      <Card title="List components" color="#2AB7CA">
        <StudentsLists />
      </Card>

      <Card title="Components with children" color="#2AB7CA">
        <Family lastName="Son">
          <FamilyMember name="Goku" />
          <FamilyMember name="Gohan" />
          <FamilyMember name="Goten" />
        </Family>
      </Card>

      <Card title="Random numbers" color="#FA6900">
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
