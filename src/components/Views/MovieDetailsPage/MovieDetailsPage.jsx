import MovieDetailsCard from "../../MovieDetailsCard/MovieDetailsCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../../API/Api";
import { MovieDetailsPageStyles } from "./MovieDetailsPage.styles";

function MovieDetailsPage() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchMovieById(moviesId).then(setMovie);
  }, [moviesId]);

  return (
    <MovieDetailsPageStyles>
      <MovieDetailsCard movie={movie} />
    </MovieDetailsPageStyles>
  );
}

export default MovieDetailsPage;
