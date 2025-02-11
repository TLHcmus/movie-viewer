import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import "../css/Home.css";
import { getTopAnimes, searchAnimes } from "../services/api";
function Home() {
  // Query state
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch data
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTopAnimes = async () => {
      try {
        const topAnimes = await getTopAnimes();
        setMovies(topAnimes);
      } catch (error) {
        console.log(error);
        setError("Failed to load animes...");
      } finally {
        setLoading(false);
      }
    };
    loadTopAnimes();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setLoading(true);
    try {
      const searchResult = await searchAnimes(searchQuery);
      setMovies(searchResult);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to search animes...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          placeholder="Search for an anime..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.mal_id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
