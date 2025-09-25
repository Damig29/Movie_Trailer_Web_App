import { useEffect, useState } from "react";

const Trailer = ({ movieInfo }) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrailer = async () => {
      if (!movieInfo?.id) return;
      
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieInfo.id}/videos?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTgwMjA5MDFlOGE4YWYwZjNkNjM2YzZkODNiMDhjNiIsIm5iZiI6MTc1NTgwNzM2Ny44OTc5OTk4LCJzdWIiOiI2OGE3N2U4N2YzZTNlZmZjYjk2OTdhNDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.gWvdp71PsyeVwPaS9099BoL90ChD_zmQZUt6lYy9B9U",
            },
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          // Find the first official trailer or teaser
          const trailer = data.results?.find(
            video => video.type === "Trailer" && video.site === "YouTube"
          );
          setTrailerKey(trailer?.key);
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [movieInfo?.id]);

  const posterPath = movieInfo?.poster_path 
    ? `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`
    : '/no-movie.png';

  return (
    <div>
      <div className="flex px-10 pb-5 gap-5 justify-between">
        <img 
          src={posterPath} 
          alt={`${movieInfo?.title || 'Movie'} poster`} 
          className="object-cover w-64 h-96 rounded-lg"
        />
        <div className="flex-1">
          {loading ? (
            <div className="flex justify-center items-center h-96 bg-gray-800 rounded-lg">
              <span className="text-white">Loading trailer...</span>
            </div>
          ) : trailerKey ? (
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title={`${movieInfo?.title || 'Movie'} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          ) : (
            <div className="flex justify-center items-center h-96 bg-gray-800 rounded-lg">
              <span className="text-white">No trailer available</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trailer;
