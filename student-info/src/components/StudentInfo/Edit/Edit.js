import React from "react";
import "./Edit.css";
function StudentOverviewItem(props) {
  return (
    <div className="studentOverview.item">
      <span className="label">{props.label + " "}</span>
      <input className="text" value={props.text} />
    </div>
  );
}
export default function Edit(props) {
  // hometown displays nothing if props are undefined;
  return (
    <div className="StudentInfo card">
      <div className="listPosition">{props.currentPosition || "0/0"}</div>

      <div className="studentName">
        <input
          key="name.first"
          onChange={props.editStudentField}
          placeholder="First Name"
          value={props.name.first}
          type="text"
        />
        <input
          key="name.last"
          onChange={props.editStudentField}
          placeholder="Last Name"
          value={props.name.last}
          type="text"
        />
      </div>

      <div className="studentOverview">
        <div className="StudentOverview item location">
          <input
            key="city"
            onChange={props.editStudentField}
            placeholder="City"
            value={props.city}
          />
          <input
            key="country"
            onChange={props.editStudentField}
            placeholder="Country"
            value={props.country}
          />
        </div>
        <input
          className="StudentOverview item employer"
          key="employeer"
          onChange={props.handleInputChange}
          placeholder="Employer"
          value={props.employer}
        />
      </div>
      <div className="studentFavorites">
        <h3 className="favoritesHeading">Favorite Movies</h3>
        <ol>
          {props.favoriteMovies.map((movie, index) => {
            return <li key={"favoriteMovie-" + index}>{movie}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
