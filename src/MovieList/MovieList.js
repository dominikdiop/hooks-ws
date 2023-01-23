import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ movies, search }) => {
  return (
    <div className="fix-me">
      {movies
        .filter((movie) =>
          movie.title.toUpperCase().includes(search.toUpperCase())
        )

        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default MovieList;
