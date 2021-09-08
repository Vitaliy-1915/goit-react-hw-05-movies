import { useState, useEffect } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import MoviesList from "../../MoviesList/MoviesList";
import { fetchSearcingMovies } from "../../API/Api";
import { MoviesPageStyles } from "./MoviesPage.styles";

export default function MoviesPage() {
  const [MovieName, setMovieName] = useState(null);
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("idle");

  // console.log(MovieName);

  useEffect(() => {
    // console.log(MovieName);
    if (!MovieName) {
      return;
    }

    MovieName &&
      fetchSearcingMovies(MovieName).then((movies) => {
        setMovies(movies);
        setStatus("resolved");
      });

    // (async () => {
    //   setStatus('pending');
    //   try {
    //     await fetchSearcingMovies(MovieName).then(movies => {
    //       // console.log(movies);
    //       if (!movies.length) {
    //         setStatus('rejected');
    //         throw new Error('No results found for this query');
    //       } else {
    //         setMovies(movies);
    //         setStatus('resolved');
    //       }
    //     });
    //   } catch (error) {}
    // })();
    // setTimeout(() => {
    //      resetState();
    // }, 500);
  }, [MovieName]);

  const resetState = () => {
    // setMovies([]);
    // setStatus("idle");
    setMovieName(null);
  };

  const formSubmit = (MovieName) => {
    resetState();
    setMovieName(MovieName);
  };

  return (
    <MoviesPageStyles>
      <SearchBar onSubmit={formSubmit} />
      {status === "idle" && <h1>Start your search </h1>}
      {status === "resolved" && MovieName && <MoviesList movies={movies} />}
      {/* {MovieName && <MoviesList movies={movies}/>} */}
    </MoviesPageStyles>
  );
}
