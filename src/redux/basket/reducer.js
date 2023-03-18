import { ADD_MOVIE } from "../constants";
import { ADD_NAME } from "../constants";
const initialState = {
  myMovies: [],
  names: [],
};
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, myMovies: [...state.myMovies, action.payload] };
    case ADD_NAME:
      return { ...state, names: [...state.names, action.payload] };
    default:
      return state;
  }
};
export default basketReducer;
