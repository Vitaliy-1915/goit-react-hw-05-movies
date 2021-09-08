// import React from "react";

import { Link, useRouteMatch } from "react-router-dom";

function MoviesList({ movies }) {
  const { url } = useRouteMatch();

  return (
    <ul>
      <h1>Trending today</h1>
      {movies &&
        movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`${url}movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </ul>
  );
}

export default MoviesList;
