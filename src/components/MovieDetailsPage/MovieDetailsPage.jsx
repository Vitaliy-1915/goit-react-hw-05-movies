import { useState, useEffect } from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import { fetchMovieById } from "../API/Api";
import { MovieDetailsPageStyles } from "./MovieDetailsPage.styles";

function MovieDetailsPage() {
  const params = useParams();
  console.log(params);

  // fetchMovieById(movie);
  return (
    <MovieDetailsPageStyles>
      <h2>movie1</h2>
    </MovieDetailsPageStyles>
  );
}

export default MovieDetailsPage;
