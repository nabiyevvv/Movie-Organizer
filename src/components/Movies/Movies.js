import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../../redux/basket/action";
import "./Movies.css";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.searchReducer.movies);
  const addMyMovies = (imdbID, Title, Year, Poster) => {
    dispatch(addMovies({ imdbID, Title, Year, Poster }));
  };
  return (
    <ul className="movies">
      {movies?.map((item) => (
        <li className="movies__item" key={item.imdbID}>
          <img src={item.Poster} />
          <h1>
            {item.Title}({item.Year})
          </h1>
          <button
            onClick={() =>
              addMyMovies(item.imdbID, item.Title, item.Year, item.Poster)
            }
          >
            ADD
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
