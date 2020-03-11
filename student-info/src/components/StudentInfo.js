import React from "react";
import StudentInfoCard from "./StudentInfoCard";

export default function StudentInfo(props) {
  let doNothing = () => {};
  let previousStudent = props.previousStudent || doNothing;
  let nextStudent = props.nextStudent || doNothing;
  let deleteStudent = props.deleteStudent || doNothing;
  let addStudent = props.deleteStudent || doNothing;
  return (
    <div id="StudentInfo">
      <StudentInfoCard student={props.student} />
      <div id="StudentInfoControls">
        <button onClick={previousStudent}>Previous</button>
        <div className="StudentInfoActionGroup">
          <button>Edit</button>
          <button onClick={deleteStudent}>Delete</button>
          <button onClick={addStudent}>New</button>
        </div>
        <button onClick={nextStudent}>Next</button>
      </div>
    </div>
  );
}
