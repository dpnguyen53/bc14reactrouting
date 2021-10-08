import React, { Component } from "react";
import Movie from "./Movie";
import Loader from "components/Loader";
import { actFetchListMovie } from "./modules/actions";
import { connect } from "react-redux";

class ListMoviePage extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderListMovie = () => {
    const { data, loading } = this.props;
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

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(actFetchListMovie());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
