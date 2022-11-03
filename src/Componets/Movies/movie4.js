import React from "react";
import ReviewFeed from "../review-feed";
import StarRating from "../star-rating";

export default class Movie4 extends React.Component {
  render() {
    let comments = [];
    return (
      <div className="container">
        <div className="card-header">
          <h4>Avavtar</h4>
        </div>
        <div className="card-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjLXCC5vBtWS3mM7jZ-dGDFXlN4euQiNOMQ&usqp=CAU"
            alt="Avatar"
          ></img>
          <StarRating />
          <ReviewFeed comments={comments} />
        </div>
      </div>
    );
  }
}
