import React from "react";
import { useSelector } from "react-redux";
import "./ListPage.css";

const ListPage = () => {
  const myMovies = useSelector((store) => store.basketReducer.myMovies);
  const names = useSelector((store) => store.basketReducer.names);

  return (
    <div className="list-page">
      <h1 className="list-page__title">{names}</h1>
      <ul className="favorites__list">
        {myMovies?.map((item) => (
          <li className="favorites__item" key={item.imdbID}>
            {item.Title} {item.Year}
            <img src={item.Poster} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
