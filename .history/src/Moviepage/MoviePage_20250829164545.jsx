import Header from "./Header";
import Trailer from "./Trailer";
import MovieDesc from "./MovieDesc";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTgwMjA5MDFlOGE4YWYwZjNkNjM2YzZkODNiMDhjNiIsIm5iZiI6MTc1NTgwNzM2Ny44OTc5OTk4LCJzdWIiOiI2OGE3N2U4N2YzZTNlZmZjYjk2OTdhNDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.gWvdp71PsyeVwPaS9099BoL90ChD_zmQZUt6lYy9B9U",
  },
};

const MoviePage = () => {
  const location = useLocation();
  const movie = location.state?.movie;
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          API_OPTIONS
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        
        const data = await response.json();
        setMovieInfo(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center min-h-screen text-red-500">Error: {error}</div>;
  if (!movieInfo) return <div className="flex justify-center items-center min-h-screen">Movie not found</div>;

  return (
    <div>
      <Header movie={movie} movieInfo={movieInfo} />
      <Trailer movie={movie} movieInfo={movieInfo} />
      <MovieDesc movie={movie} movieInfo={movieInfo} />
    </div>
  );
};

export default MoviePage;
