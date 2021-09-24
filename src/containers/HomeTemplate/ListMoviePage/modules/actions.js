import * as ActionType from "./constants";
import axios from "axios";

export const actFetchListMovie = () => {
  //Goi api trong nay
  return (dispatch) => {
    dispatch(actListMovieRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07",
      method: "GET",
    })
      .then((result) => {
        //success
        dispatch(actListMovieSuccess(result.data));
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
