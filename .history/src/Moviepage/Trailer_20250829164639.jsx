import CardImage from "../assets/cardimage.png";
import TrailerImage from "../assets/trailerimage.png";

const Trailer = ({ movieInfo }) => {
  const posterPath = movieInfo?.poster_path 
    ? `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`
    : '/no-movie.png';
    
  const backdropPath = movieInfo?.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`
    : '/no-movie.png';

  return (
    <div>
      <div className="flex px-10 pb-5 gap-5 justify-between">
        <img 
          src={posterPath} 
          alt={`${movieInfo?.title || 'Movie'} poster`} 
          className="object-cover w-64 h-96 rounded-lg"
        />
        <img 
          src={backdropPath} 
          alt={`${movieInfo?.title || 'Movie'} backdrop`} 
          className="flex-1 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Trailer;
