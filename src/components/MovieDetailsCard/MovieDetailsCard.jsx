import { Link } from "react-router-dom";
import { MovieDetailsCardStyles } from "./MovieDetailsCard.styles";

function MovieDetailsCard({ movie }) {
  // console.log(movie);
  return (
    <MovieDetailsCardStyles>
      {movie && (
        <div>
          <Link to={`/`}>
            <button type="button">Go back</button>
          </Link>

          <div className="div">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png`
              }
              alt={movie.original_title}
            />
            <div>
              <h2>
                {movie.title}
                {/* ({movie.release_date.slice(0, 4)}) */}
              </h2>
              <h3>User Score:</h3>
              <p>
                <span>{movie.vote_average * 10}%</span>
              </p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres:</h3>
              <ul>
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <li key={genre.id} className="li">
                      {genre.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </MovieDetailsCardStyles>
  );
}

export default MovieDetailsCard;
