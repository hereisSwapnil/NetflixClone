import React from "react";

export const VideoCard = ({ movies, isLarge }) => {
  return (
    <React.Fragment>
      {movies.map((movie, index) => (
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt=""
        />
      ))}
    </React.Fragment>
  );
};
