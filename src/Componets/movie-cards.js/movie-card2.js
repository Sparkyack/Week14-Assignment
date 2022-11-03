import React from "react";
import Movie2 from "../Movies/movie2";

export default class MovieCard2 extends React.Component {
  render() {
    return (
      <div className="container w-25">
        <div className="card">
          <div className="card-body">
            <Movie2 />
          </div>
        </div>
      </div>
    );
  }
}
