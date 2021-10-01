import { combineReducers } from "redux";
import listMovieReducer from "./../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "./../../containers/HomeTemplate/DetailMoviePage/modules/reducer";
import authReducer from "./../../containers/AdminTemplate/AuthPage/modules/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  authReducer,
});

export default rootReducer;
