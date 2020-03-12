import React from "react";
import Card from "./Card/Card";
import "./StudentInfo.css";
import Edit from "./Edit/Edit";
import data from "../../data";
let doNothing = () => {};

const studentModel = {
  id: Number(),
  name: { first: "", last: "" },
  city: "",
  country: "",
  employer: "",
  title: "",
  favoriteMovies: [""]
};

export default class StudentInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      studentData: [...data],
      currentStudent: 0,
      editMode: false
    };
  }

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
  deleteStudent = () => {};
  addStudent = () => {};
  render() {
    if (this.state.editMode) {
      return (
        <Edit student={this.state.studentData[this.state.currentStudent]} />
      );
    }

    return (
      <div id="StudentInfo">
        <Card
          student={this.state.studentData[this.state.currentStudent]}
          currentPosition={this.state.currentStudent}
        />
        <div className="controls">
          <button
            onClick={this.previousStudent}
            disabled={this.state.currentStudent <= 0}
          >
            &lt;Previous
          </button>
          <div className="actionGroup">
            <button>Edit</button>
            <button onClick={this.deleteStudent}>Delete</button>
            <button onClick={this.addStudent}>New</button>
          </div>
          <button
            onClick={this.nextStudent}
            disabled={this.state.currentStudent >= this.state.studentData - 1}
          >
            Next&gt;
          </button>
        </div>
      </div>
    );
  }
}
