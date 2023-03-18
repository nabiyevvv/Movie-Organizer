import { ADD_MOVIE } from "../constants";
import { ADD_NAME } from "../constants";

export const addMovies = (payload) => ({
  type: ADD_MOVIE,
  payload,
});
export const addNames = (payload) => ({
  type: ADD_NAME,
  payload,
});
