import React from "react";
import ReviewFeed from "../review-feed";
import StarRating from "../star-rating";

export default class Movie3 extends React.Component {
  render() {
    let comments = [];
    return (
      <div className="container">
        <div className="card-header">
          <h4>Forged in Fire</h4>
        </div>
        <div className="card-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflydQR6tItPLDSJCPgJ-G9HbTPK9-1HFtOw&usqp=CAU"
            alt="FIF"
          ></img>
          <StarRating />
          <ReviewFeed comments={comments} />
        </div>
      </div>
    );
  }
}
