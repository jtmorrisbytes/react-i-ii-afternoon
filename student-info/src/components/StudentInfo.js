import React from "react";
import StudentInfoCard from "./StudentInfoCard";

let doNothing = () => {};
export default function StudentInfo(props) {
  let previousStudent = props.previousStudent || doNothing;
  let nextStudent = props.nextStudent || doNothing;
  let deleteStudent = props.deleteStudent || doNothing;
  let addStudent = props.deleteStudent || doNothing;

  return (
    <div id="StudentInfo">
      <StudentInfoCard
        student={props.student}
        currentPosition={props.currentPosition}
      />
      <div id="StudentInfoControls">
        <button onClick={previousStudent} disabled={props.currentStudent <= 0}>
          Previous
        </button>
        <div className="StudentInfoActionGroup">
          <button>Edit</button>
          <button onClick={deleteStudent}>Delete</button>
          <button onClick={addStudent}>New</button>
        </div>
        <button
          onClick={nextStudent}
          disabled={props.currentStudent >= props.numStudents - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
