import React from "react";
import "./App.css";

import StudentInfo from "./components/StudentInfo";

function Navigation(props) {
  return (
    <nav id="Navigation">
      <a href="/#/home">Home</a>
    </nav>
  );
}
export default class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Navigation />
        <StudentInfo />
      </div>
    );
  }
}
