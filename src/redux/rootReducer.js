import { combineReducers } from "redux";
import basketReducer from "./basket/reducer";
import searchReducer from "./search/reducer";
const rootReducer = combineReducers({ basketReducer, searchReducer });
export default rootReducer;
