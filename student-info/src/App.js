import React from "react";
import "./App.css";
import data from "./data";

import StudentInfo from "./components/StudentInfo";

function Navigation(props) {
  return (
    <nav id="Navigation">
      <a href="/#/home">Home</a>
    </nav>
  );
}
export default class App extends React.Component {
  state = {
    studentData: [...data],
    currentStudent: 0
  };

  nextStudent = () => {
    // I know im being paranoid here, but just in case...
    if (this.state.currentStudent > this.state.studentData.length - 1) {
      this.setState({ currentStudent: this.state.studentData.length - 1 });
      return;
    } else if (
      this.state.currentStudent ===
      this.state.studentData.length - 1
    ) {
      // Ideally here I would display some sort of feedback, like disabling
      // the next button or a message or modal of some kind.
      // but the current iteration of this function will do nothing
      console.info(
        "App nextStudent(): This is as far as we can go... doing nothing"
      );
      return;
    } else {
      this.setState({ currentStudent: this.state.currentStudent + 1 });
    }
  };
  previousStudent = () => {};
  goToStudent = idNum => {};

  render() {
    let currentPosition =
      this.state.currentStudent + 1 + "/" + this.state.studentData.length;
    return (
      <div ID="App">
        <Navigation />
        <StudentInfo
          nextStudent={this.nextStudent}
          previousStudent={this.previousStudent}
          student={this.state.studentData[this.state.currentStudent]}
          currentPosition={currentPosition}
        />
      </div>
    );
  }
}
