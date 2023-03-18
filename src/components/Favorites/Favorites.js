import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addNames } from "../../redux/basket/action";
import "./Favorites.css";

const Favorites = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const myMovies = useSelector((store) => store.basketReducer.myMovies);
  const names = useSelector((store) => store.basketReducer.names);

  const handleValue = (e) => {
    setValue(e.target.value);
  };
  const handleValueName = () => {
    dispatch(addNames(value));
    setValue("");
  };
  return (
    <div className="favorites">
      <input value={value} onChange={handleValue} className="favorites__name" />
      <ul className="favorites__list">
        {myMovies?.map((item) => (
          <li className="favorites__item" key={item.imdbID}>
            {item.Title} {item.Year}
            <img src={item.Poster} />
          </li>
        ))}
      </ul>
      <button
        onClick={handleValueName}
        type="button"
        className="favorites__save"
        disabled={!value}
      >
        Сохранить список
      </button>
      <Link className="favorites__title" to="/list/:id">
        {names}
      </Link>
    </div>
  );
};

export default Favorites;
