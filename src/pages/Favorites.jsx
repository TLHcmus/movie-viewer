import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/Favorites.css";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.mal_id} />
        ))}
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorites Anime Yet</h2>
      <p>Start adding animes to your favorites and they will appear here!</p>
    </div>
  );
}

export default Favorites;
