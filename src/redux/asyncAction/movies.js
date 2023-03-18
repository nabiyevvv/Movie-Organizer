import searchMovie from "../search/action";
const fetchMoviesList = (searchline) => {
  return (dispatch) => {
    fetch(`http://www.omdbapi.com/?t=${searchline}&apikey=cba21056`)
      .then((res) => res.json())
      .then((data) => dispatch(searchMovie(data)));
  };
};
export default fetchMoviesList;
