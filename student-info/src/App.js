import React from "react";
import "./App.css";

function App() {
  return (
    <div ID="App">
      <nav id="Navigation">
        <a href="/#/home">Home</a>
      </nav>
      <div id="StudentInfoController">
        <div className="StudentInfoCard">
          <h1>Student Card</h1>
        </div>
        <div id="StudentInfoControls"></div>
      </div>
    </div>
  );
}

export default App;
