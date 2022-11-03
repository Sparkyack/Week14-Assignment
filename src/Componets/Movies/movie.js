import React from "react";
import ReviewFeed from "../review-feed";
import StarRating from "../star-rating";

export default class Movie extends React.Component {
  render() {
    let comments = [];
    return (
      <div className="container">
        <div className="card-header">
          <h4>Dude, Where's my Car?</h4>
        </div>
        <div className="card-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3yYQgUSLt7Wt_jFhkTGfsOhCa9atbO_R6g&usqp=CAU"
            alt="dude!"
          ></img>
          <StarRating />
          <ReviewFeed comments={comments} />
        </div>
      </div>
    );
  }
}
