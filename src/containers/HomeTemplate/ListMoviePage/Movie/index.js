import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3">
        <div className="card">
          <img className="card-img-top" src={movie.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{movie.tenPhim}</h4>
          </div>
          <Link className="btn btn-success" to={`/detail/${movie.maPhim}`}>
            Detail
          </Link>
        </div>
      </div>
    );
  }
}
