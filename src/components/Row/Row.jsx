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
    <React.Fragment>
      <h1
        className={`text-white px-5 mt-10 font-extrabold ${
          isLargeRow ? "text-3xl" : "text-2xl"
        } `}
      >
        {title}
      </h1>
      <div className="flex px-5 py-5 space-x-3 overflow-x-scroll overflow-y-hidden no-scrollbar mb-10">
        <VideoCard movies={movies} isLarge={isLargeRow} />
      </div>
    </React.Fragment>
  );
};
