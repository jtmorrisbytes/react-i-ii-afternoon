import React from "react";
import StudentInfoCard from "./StudentInfoCard";

export default function StudentInfo(props) {
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
