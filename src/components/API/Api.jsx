import axios from "axios";

const API_KEY = "ce78da2dcdc7fd14a3afc925f4e2f59d";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  try {
    const tredingFilms = await axios
      .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
      .then(({ data }) => data.results);
    // console.log(tredingFilms);
    return tredingFilms;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearcingMovies = async (MovieName) => {
  // console.log(MovieName);
  try {
    const searchingMovies = await axios
      .get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${MovieName}`
      )
      .then(({ data }) => data.results);
    // console.log(searchingMovies);
    return searchingMovies;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieById = async (id) => {
  try {
    const movieDetails = await axios
      .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      .then((results) => results.data);
    // console.log(movieDetails);
    return movieDetails;
  } catch (error) {
    console.error(error);
  }
};
