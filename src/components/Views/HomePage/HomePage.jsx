import MoviesList from "../../MoviesList/MoviesList";
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../API/Api";
import { HomePageStyles } from "./HomePage.styles";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <HomePageStyles>
      <MoviesList movies={movies} />
    </HomePageStyles>
  );
}

export default HomePage;
