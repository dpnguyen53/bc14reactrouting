import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchDetailMovie } from "./modules/actions";
import Loader from "./../../../components/Loader";

class DetailPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchData(id);
  }

  renderTable = () => {
    const { data } = this.props;
    return data?.lichChieu?.map((item) => {
      return (
        <tr key={item.maLichChieu}>
          <td>{item.thongTinRap.tenCumRap}</td>
          <td>{item.thongTinRap.tenRap}</td>
          <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
          <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
          <td>
            <a href="#dat-ve" className="btn btn-success">
              Booking
            </a>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="container">
        <h3>DetailPage</h3>
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={data && data.hinhAnh} alt="" />
          </div>
          <div className="col-md-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>Tên phim</td>
                  <td>{data?.tenPhim}</td>
                </tr>
                <tr>
                  <td>Mô tả</td>
                  <td>{data?.moTa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <td>Cụm rạp</td>
                  <td>Tên rạp</td>
                  <td>Ngày chiếu</td>
                  <td>Giờ chiếu</td>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailMovieReducer.loading,
    data: state.detailMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id) => {
      dispatch(actFetchDetailMovie(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
