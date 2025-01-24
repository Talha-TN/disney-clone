import React from "react";
const MoviesCard = ({ data }) => {
  const {poster_path,original_title,vote_average,status} = data
  
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
        className="w-full h-64 "
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold text-white">{original_title}</h1>
        <p className="text-gray-400 mt-4">Rating: {vote_average}</p>
        <p className="text-gray-500 mt-2">Status: {status}</p>
      </div>
    </div>
  );
};
export default MoviesCard;

