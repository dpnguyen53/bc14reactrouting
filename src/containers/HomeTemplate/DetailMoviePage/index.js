import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchDetailMovie } from "./modules/actions";

class DetailPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchData(id);
  }

  render() {
    return (
      <div>
        <h3>DetailPage</h3>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id) => {
      dispatch(actFetchDetailMovie(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(DetailPage);
