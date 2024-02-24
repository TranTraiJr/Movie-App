import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../Request";
import { useAuth } from "../context/AuthContext";
import Row from "../components/Row";

function Genres() {
  const [movies, setMovies] = useState([]);
  const { requestGenres } = useAuth();

  const movie = movies[Math.floor(Math.random() * movies.length)];

  let TypeGenres;

  if (requestGenres === "adventure") {
    TypeGenres = requests.requestAdventure;
  }
  if (requestGenres === "comedy") {
    TypeGenres = requests.requestComedy;
  }
  if (requestGenres === "history") {
    TypeGenres = requests.requestHistory;
  }
  if (requestGenres === "music") {
    TypeGenres = requests.requestMusic;
  }
  if (requestGenres === "romance") {
    TypeGenres = requests.requestRomance;
  }
  if (requestGenres === "war") {
    TypeGenres = requests.requestWar;
  }

  useEffect(
    function () {
      axios.get(TypeGenres).then((response) => {
        setMovies(response.data.results);
      });
    },
    [TypeGenres]
  );

  // console.log(movie);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
          <img
            className="object-cover w-full h-full"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl font-bold md:text-5xl">{movie?.title}</h1>
            <div className="my-4">
              <button className="px-5 py-2 text-black bg-gray-300 border border-gray-300">
                Play
              </button>
              <button className="px-5 py-2 ml-4 text-white border border-gray-300">
                Watch Later
              </button>
            </div>
            <p className="text-sm text-gray-400">
              Release: {movie?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {truncateString(movie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
      <Row
        rowID="1"
        title={`More ${requestGenres} movies`}
        fetchURL={TypeGenres}
      />
    </>
  );
}

export default Genres;
