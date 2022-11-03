import React from "react";
import Movie4 from "../Movies/movie4";

export default class MovieCard4 extends React.Component {
  render() {
    return (
      <div className="container w-25">
        <div className="card">
          <div className="card-body">
            <Movie4 />
          </div>
        </div>
      </div>
    );
  }
}
