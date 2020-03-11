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
      console.info(
        "somehow the current student was set beyond the index of the list. resetting..."
      );
      return;
    } else if (this.state.currentStudent < this.state.studentData.length - 1) {
      this.setState({ currentStudent: this.state.currentStudent + 1 });
    } else {
      // Ideally here I would display some sort of feedback, like disabling
      // the next button or a message or modal of some kind.
      // but the current iteration of this function will do nothing
      console.info(
        "App nextStudent(): This is as far as we can go... doing nothing"
      );
    }
  };
  previousStudent = () => {
    if (this.state.currentPosition < 0) {
      console.log("somehow the current student was set negative... resetting");
      this.setState({ currentStudent: 0 });
    } else if (this.state.currentStudent > 0) {
      this.setState({ currentStudent: this.state.currentStudent - 1 });
    } else {
      console.info(
        "App previousStudent(): this is the first student, cant go any further..."
      );
    }
  };
  goToFirstStudent = () => {
    this.setState({ currentStudent: 0 });
  };

  render() {
    let currentPosition =
      this.state.currentStudent + 1 + "/" + this.state.studentData.length;
    return (
      <div id="App">
        <Navigation />
        <StudentInfo
          nextStudent={this.nextStudent}
          previousStudent={this.previousStudent}
          student={this.state.studentData[this.state.currentStudent]}
          currentStudent={this.state.currentStudent}
          numStudents={this.state.studentData.length}
          currentPosition={currentPosition}
        />
      </div>
    );
  }
}
