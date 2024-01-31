import React, { useEffect, useState } from "react";
import { VideoCard } from "../VideoCard/VideoCard";
import axios from "../../axios";

export const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className="flex space-x-3">
      <h1>ok</h1>
      <VideoCard movies={movies} isLarge={true} />
    </div>
  );
};
