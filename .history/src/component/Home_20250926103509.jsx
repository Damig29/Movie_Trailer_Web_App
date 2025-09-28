import heroImg from "../assets/hero-img.png";
import Search from "./Search";
import Spinner from "./Spinner";
import MovieCard from "./MovieCard";
import { useDebounce } from "react-use";
import { useEffect, useState } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTgwMjA5MDFlOGE4YWYwZjNkNjM2YzZkODNiMDhjNiIsIm5iZiI6MTc1NTgwNzM2Ny44OTc5OTk4LCJzdWIiOiI2OGE3N2U4N2YzZTNlZmZjYjk2OTdhNDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.gWvdp71PsyeVwPaS9099BoL90ChD_zmQZUt6lYy9B9U",
  },
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  //Debounce the search term to prevent making too many API requests by waiting for 500ms
  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    500,
    [searchTerm]
  );

  const fetchMovies = async (query) => {
    setLoading(true);
    setErrorMessage("");
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) throw new Error("Failed to fetch movies");
      const data = await response.json();
      if (!data.results || data.results.length === 0) {
        setErrorMessage("No movies found");
        setMoviesList([]);
      } else {
        setMoviesList(data.results);
      }
    } catch (e) {
      setErrorMessage("Error fetching Movies, Please try again lanter");
    } finally {
      setLoading(false);
    }
  };

  // Fetch movies on component mount
  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src={heroImg} alt="" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            without the hassle
          </h1>
          <Search search={searchTerm} setSearch={setSearchTerm} />
        </header>

        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>
          {loading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {moviesList.filter(movie => {
                const year = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';
                return year >= '2000'; // Filter for movies released in 2000
              })
              .map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default Home;


