import React from "react";
import ReviewFeed from "../review-feed";
import StarRating from "../star-rating";

export default class Movie2 extends React.Component {
  render() {
    let comments = [];
    return (
      <div className="container">
        <div className="card-header">
          <h4>StarWars The Rise of Skywalker</h4>
        </div>
        <div className="card-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnZ01sX2QLPzgTP7GgvqQeNI6j1ucZaEjEg&usqp=CAU"
            alt="starwars"
          ></img>
          <StarRating />
          <ReviewFeed comments={comments} />
        </div>
      </div>
    );
  }
}
