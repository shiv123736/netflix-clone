import React, { useEffect, useState } from "react";
import axios from "./Axios";
import Requests from "./Request";
import "./style/banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        baseUrl.concat(Requests.fetchNetflixOriginals)
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_play-button banner_button">Play</button>
          <button className="banner_myList-button banner_button">
            My List
          </button>
        </div>
        <div className="banner_description">
          <h2>{truncate(movie?.overview, 150)}</h2>
        </div>
      </div>
      <div className="banner_overlay"></div>
    </header>
  );
};

export default Banner;
