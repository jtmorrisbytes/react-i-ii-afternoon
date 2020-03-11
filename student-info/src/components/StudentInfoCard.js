import React from "react";
import "./StudentInfoCard.css";
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
  let { city, country, employer, title, name, favoriteMovies } = props.student;
  let hometown = (city || "") + (city && country ? ", " : "") + (country || "");
  return (
    <div className="StudentInfoCard">
      <div className="listPosition">{props.currentPosition || "0/0"}</div>
      <h1 className="studentHeading">{name.first + " " + name.last}</h1>
      <div className="studentOverview">
        <StudentOverviewItem label="From:" text={hometown} />
        <StudentOverviewItem label="Job Title:" text={title} />
        <StudentOverviewItem label="Employer:" text={employer} />
      </div>
      <div className="studentFavorites">
        <h3>Favorite Movies</h3>
        <ol>
          {favoriteMovies.map((movie, index) => {
            return <li key={"favoriteMovie-" + index}>{movie}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
