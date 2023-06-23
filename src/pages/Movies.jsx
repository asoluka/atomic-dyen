import { useEffect, useState } from "react";

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer [USE_YOURS_HERE",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((json) => setMovies(json.results))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="flex gap-x-8">
      <div className="w-full p-2 overflow-x-auto">
        <ol className="grid grid-cols-3 gap-4">
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                <li className="bg-slate-600 p-4 mb-2 text-white">
                  <div className="">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <h3>{movie.title}</h3>

                    <p>{movie.overview}</p>
                  </div>
                </li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
