import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieCard.css";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.mal_id);
  function handleFavoriteCLick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.mal_id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.images.jpg.large_image_url} alt={movie.title} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={handleFavoriteCLick}
          >
            ♥︎
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title_english || movie.title}</h3>
        <p>{movie.year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
