import axios from "axios";
import configENV from "./../config";

const TOKEN_CYBERSPFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE0LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTE5MDQwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1MzM4MDAwfQ.k7Kzay9-bYUjN7pTcMrYpgTq5Xe5U6jdvM1OUQ5L_2A";

const api = axios.create({
  baseURL: configENV.apiUrl,
});

api.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      TokenCybersoft: TOKEN_CYBERSPFT,
      Authorization: localStorage.getItem("UserAdmin")
        ? "Bearer " + JSON.parse(localStorage.getItem("UserAdmin")).accessToken
        : "",
    };

    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);

export default api;
