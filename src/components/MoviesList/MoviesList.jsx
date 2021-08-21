import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingMovies } from "../API/Api";

function MoviesList() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <ul>
      <h1>Trending today</h1>
      {movies &&
        movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/${movie.id}`}>{movie.title}</Link>{" "}
          </li>
        ))}
    </ul>
  );
}

export default MoviesList;
