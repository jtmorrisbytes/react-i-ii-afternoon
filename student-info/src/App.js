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

function App() {
  return (
    <div ID="App">
      <Navigation />
      <StudentInfo />
    </div>
  );
}

export default App;
