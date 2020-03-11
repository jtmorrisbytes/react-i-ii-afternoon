import React from "react";

function StudentOverviewItem(props) {
  return (
    <div className="studentOverviewItem">
      <span className="label">{props.label}</span>
      <span className="text">{props.text}</span>
    </div>
  );
}
export default function StudentInfoCard(props) {
  // hometown displays nothing if props are undefined
  let hometown =
    (props.city || "") +
    (props.city && props.country ? "," : "") +
    (props.country || "");
  return (
    <div className="StudentInfoCard">
      <span className="listPosition">{props.listPosition || "0/0"}</span>
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
