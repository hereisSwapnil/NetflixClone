import React, { useEffect, useState } from "react";
import requests from "../../requests";
import axios from "../../axios";

export const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request.data);
      let a = Math.floor(Math.random() * (request.data.results.length - 1));
      console.log(a);
      setMovie(request.data.results[a]);
      return request;
    };
    fetchData();
  }, []);

  // console.log(`https://image.tmdb.org/t/p/original${movie?.poster_path}`);
  console.log(movie);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    // https://torranceca.files.wordpress.com/2019/10/netflix.jpg
    <header
      className="bg-cover bg-center h-[448px] relative object-cover text-white flex flex-col justify-between"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="ml-[30px] pt-[130px] h-[190px]">
        <h1 className="text-[38px] font-bold pb-5">{movie?.name}</h1>
        <div className="flex space-x-3">
          <button className="bg-[#241f1f] text-white font-bold rounded-md px-4 py-3 hover:bg-[#e6e6e6] hover:text-black transition-all duration-[0.5s]">
            Play
          </button>
          <button className="bg-[#241f1f] text-white font-bold rounded-md px-4 py-3 hover:bg-[#e6e6e6] hover:text-black transition-all duration-[0.5s]">
            My List
          </button>
        </div>
        <h1 className="max-w-[350px] text-[13px] pt-5">
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>
      {/* Fader div */}
      <div
        className="h-[110px] align-bottom"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)",
        }}
      ></div>
    </header>
  );
};
