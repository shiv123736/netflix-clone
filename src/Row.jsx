import React, { useEffect, useState } from "react";
import axios from "./Axios";
import "./style/row.css";

const Row = (props) => {
  const { title, fetchUrl, largeRow } = props;
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3";
  const imgBaseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(baseUrl.concat(fetchUrl));
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //   console.table(movies);
  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={largeRow ? "row_largePoster" : "row_poster"}
            src={`${imgBaseUrl}${
              largeRow ? movie.backdrop_path : movie.poster_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Row;
