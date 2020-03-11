import React from "react";

function StudentOverviewItem(props) {
  return (
    <div className="studentOverviewItem">
      <span className="label">{props.label + " "}</span>
      <span className="text">{props.text}</span>
    </div>
  );
}
export default function StudentInfoCard(props) {
  // hometown displays nothing if props are undefined
  let { city, country, employer, title, name } = props.student;
  let hometown = (city || "") + (city && country ? ", " : "") + (country || "");
  return (
    <div className="StudentInfoCard">
      <span className="listPosition">{props.currentPosition || "0/0"}</span>
      <h1 className="studentHeading">{name.first + " " + name.last}</h1>
      <div className="studentOverview">
        <StudentOverviewItem label="From:" text={hometown} />
        <StudentOverviewItem label="Job Title:" text={title} />
        <StudentOverviewItem label="Employer:" text={employer} />
      </div>
      <div className="studentFavorites"></div>
    </div>
  );
}
