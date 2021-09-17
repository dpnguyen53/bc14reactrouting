import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import Loader from "./../../../components/Loader";

export default class ListMoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null,
      error: null,
    };
  }

  componentDidMount() {
    //pending
    this.setState({
      loading: true,
      data: null,
      error: null,
    });
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
      method: "GET",
    })
      .then((result) => {
        //success
        this.setState({
          loading: false,
          data: result.data,
          error: null,
        });
      })
      .catch((error) => {
        //error
        this.setState({
          loading: false,
          data: null,
          error,
        });
      });
  }

  renderListMovie = () => {
    const { data, loading } = this.state;
    if (loading) return <Loader />;
    return data?.map((movie) => {
      return <Movie key={movie.maPhim} movie={movie} />;
    });
  };

  render() {
    return (
      <div className="container">
        <h3>ListMoviePage</h3>
        <div className="row">{this.renderListMovie()}</div>
      </div>
    );
  }
}
