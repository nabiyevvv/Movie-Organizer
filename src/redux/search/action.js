import { SEARCH_MOVIE } from "../constants";
const searchMovie = (payload) => ({
  type: SEARCH_MOVIE,
  payload,
});
export default searchMovie;
