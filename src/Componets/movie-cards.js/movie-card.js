import React from "react";
import Movie from "../Movies/movie";

export default class MovieCard extends React.Component {
  render() {
    return (
      <div className="container w-25">
        <div className="card">
          <div className="card-body">
            <Movie />
          </div>
        </div>
      </div>
    );
  }
}
