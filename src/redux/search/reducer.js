import { SEARCH_MOVIE } from "../constants";
const initialState = {
  movies: [],
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return { ...state, movies: [...state.movies, action.payload] };
    default:
      return state;
  }
};
export default searchReducer;
