import { combineReducers } from "redux";
import listMovieReducer from "./../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "./../../containers/HomeTemplate/DetailMoviePage/modules/reducer";
import authReducer from "./../../containers/AdminTemplate/AuthPage/modules/reducer";
import addUserReducer from "../../containers/AdminTemplate/AddUserPage/modules/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  authReducer,
  addUserReducer,
});

export default rootReducer;
