import React from "react";

export const VideoCard = ({ movies, isLarge }) => {
  return (
    <React.Fragment>
      {movies.map((movie, index) =>
        isLarge ? (
          <img
            className="h-[200px] hover:scale-[1.2] transition-all duration-300"
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt=""
          />
        ) : (
          <img
            className="h-[100px] hover:scale-[1.2] transition-all duration-50"
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt=""
          />
        )
      )}
    </React.Fragment>
  );
};
