import React from "react";
import Movie3 from "../Movies/movie3";

export default class MovieCard3 extends React.Component {
  render() {
    return (
      <div className="container w-25">
        <div className="card">
          <div className="card-body">
            <Movie3 />
          </div>
        </div>
      </div>
    );
  }
}
