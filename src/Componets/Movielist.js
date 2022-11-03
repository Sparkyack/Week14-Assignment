import React from "react";
import MovieCard from "./movie-cards.js/movie-card";
import MovieCard2 from "./movie-cards.js/movie-card2";
import MovieCard3 from "./movie-cards.js/movie-card3";
import MovieCard4 from "./movie-cards.js/movie-card4";

export default class MovieList extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Movie Review</h1>
        <div className="row">
          <MovieCard />
          <MovieCard2 />
          <MovieCard3 />
          <MovieCard4 />
        </div>
      </div>
    );
  }
}
