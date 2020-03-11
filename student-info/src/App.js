import React from "react";
import "./App.css";
function Navigation(props) {
  return (
    <nav id="Navigation">
      <a href="/#/home">Home</a>
    </nav>
  );
}
function StudentInfo(props) {
  return (
    <div id="StudentInfo">
      <StudentInfoCard />
      <div id="StudentInfoControls">
        <button>Previous</button>
        <div className="StudentInfoActionGroup">
          <button>Edit</button>
          <button>Delete</button>
          <button>New</button>
        </div>
        <button>Next</button>
      </div>
    </div>
  );
}

function StudentOverviewItem(props) {
  return (
    <div className="studentOverviewItem">
      <span className="label">{props.label}</span>
      <span className="text">{props.text}</span>
    </div>
  );
}

function StudentInfoCard(props) {
  // hometown displays nothing if props are undefined
  let hometown =
    (props.city || "") +
    (props.city && props.country ? "," : "") +
    (props.country || "");
  return (
    <div className="StudentInfoCard">
      <h1 className="studentHeading">Student Card</h1>
      <div className="studentOverview">
        <StudentOverviewItem label="From:" text={hometown} />
        <StudentOverviewItem label="Job Title:" text={props.title} />
        <StudentOverviewItem label="Employer" text={props.employer} />
      </div>
      <div className="studentFavorites"></div>
    </div>
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
