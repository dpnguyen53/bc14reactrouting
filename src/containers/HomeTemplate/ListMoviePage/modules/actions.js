import * as ActionType from "./constants";
import api from "./../../../../utils/apiUtils";

export const actFetchListMovie = () => {
  //Goi api trong nay
  return (dispatch) => {
    dispatch(actListMovieRequest());
    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP03")
      .then((result) => {
        //success
        dispatch(actListMovieSuccess(result.data.content));
      })
      .catch((error) => {
        //error
        dispatch(actListMovieFailed(error));
      });
  };
};

const actListMovieRequest = () => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMovieFailed = (error) => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: error,
  };
};
