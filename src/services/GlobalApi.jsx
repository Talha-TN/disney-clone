import React, { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
const GlobalApi = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=97b85a3e493dbe5c6ec0337641ae6907"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {movies.map((movie) => (
        <MoviesCard key={movie.id} data={movie} />
      
      ))}
      
    </div>
  );
};
export default GlobalApi;

