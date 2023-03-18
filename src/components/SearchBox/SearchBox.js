import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBox.css";
import fetchMoviesList from "../../redux/asyncAction/movies";
const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchLine, setSearchLine] = useState("");
  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
  };
  const handleMovies = () => {
    dispatch(fetchMoviesList(searchLine));
    setSearchLine("");
  };
  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          onClick={handleMovies}
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
        >
          Искать
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
