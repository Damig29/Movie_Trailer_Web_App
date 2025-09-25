import { useState, useEffect } from "react";
import { useDebounce } from "react-use";
imp
import heroImg from "./assets/hero-img.png";
import Search from "./component/Search";
import Spinner from "./component/Spinner";
import MovieCard from "./component/MovieCard";
import MoviePage from "./Moviepage/MoviePage";

//Sending request to the API URL
const API_BASE_URL = "https://api.themoviedb.org/3";

//Getting and Storing the API KEY into a variable
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET", //the method to get the movie from the API
  headers: {
    accept: "application/json", //telling the API to send the request as a json file
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTgwMjA5MDFlOGE4YWYwZjNkNjM2YzZkODNiMDhjNiIsIm5iZiI6MTc1NTgwNzM2Ny44OTc5OTk4LCJzdWIiOiI2OGE3N2U4N2YzZTNlZmZjYjk2OTdhNDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.gWvdp71PsyeVwPaS9099BoL90ChD_zmQZUt6lYy9B9U", //AUTHENTICATING THE API REQUEST OR VERIFYING WHO IS MAKING THE REQUEST THAT WHY THE API KEY IS PASSED IN SINCE WE HAVE CREATED AN ACCOUNT
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  //Debounce the search term to prevent making too many API requests by waiting for 500ms
  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    500,
    [searchTerm]
  );

  //DISPLAYING THE ERROR IN THE BROWSER
  const [errorMessage, setErrorMessage] = useState("");

  //THE FUNCTION TO FETCH THE MOVIES FROM THE API
  const fetchMovies = async (query) => {
    setLoading(true); //FOR THE LOADING
    setErrorMessage(""); //CLEARING ANY PREVIOUS ERROR MESSAGE
    //TRY IS USE TO PERFORM THE API CALL
    try {
      //ENDPOINT: AS IN EXACT LOCATION OF THE MOVIES
      const endpoint = query
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`; //this will make sure to fetchc all the movies

      const response = await fetch(endpoint, API_OPTIONS);
      // FETCH: IT IS BUILT-IN JAVASCRIPT FUNCTION TO MAKE HTTP REQUEST(LIKE GET OR POST) TO API OR SERVERS, IT IS USUSALLY USE TO GET DATA FROM API FOR DISPLAYING ON WEBSITE

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      console.log(data);
      if (data.results.length === 0) {
        setErrorMessage(data.Error || "No movies found");
        setMoviesList([]);
        return;
      }

      setMoviesList(data.results || []); //SETTING THE MOVIES LIST TO THE DATA.RESULTS

      // store the list of movies
    setMoviesList(data.results);

    // 🔹 fetch full details of the first movie (or whichever you want)
     const firstMovieId = data.results[1].id;
     const detailsResponse = await fetch(
       `${API_BASE_URL}/movie/${firstMovieId}?language=en-US`,
       API_OPTIONS
     );
    const movieDetails = await detailsResponse.json();


     console.log("Full Movie Details:", movieDetails); // 👈 This is the "actual movie"
    
      //CATCH IS USE TO RETURN AN ERROR MWHEN THE TRY FUNCTION DOESN'T WORK
    } catch (error) {
      console.error("error fetching movies: " + error);
      setErrorMessage("Error fetching Movies, Please try again later");
    } finally {
      setLoading(false); //SETTING THE LOADING TO FALSE WHEN THE FETCHING IS DONE
    }
  };

  // Fetch movies on component mount
  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div>
      <MoviePage />
    </div>
    // <main>
    //   <div className="pattern" />

    //   <div className="wrapper">
    //     <header>
    //       <img src={heroImg} alt="" />
    //       <h1>
    //         Find <span className="text-gradient">Movies</span> You'll Enjoy
    //         without the hassle
    //       </h1>

    //       <Search search={searchTerm} setSearch={setSearchTerm} />
    //     </header>

    //     <section className="all-movies">
    //       <h2 className="mt-[40px]">All Movies</h2>

    //       {loading ? (
    //         <Spinner />
    //       ) : errorMessage ? (
    //         <p className="text-red-500">{errorMessage}</p>
    //       ) : (
    //         <ul>
    //           {moviesList.map((movie) => (
    //             <MovieCard key={movie.id} movie={movie} />
    //           ))}
    //         </ul>
    //       )}
    //     </section>
    //   </div>
    // </main>
  );
};

export default App;
