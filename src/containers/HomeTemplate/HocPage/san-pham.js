import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    return (
      <>
        <div className="form-group">
          <label>Ma SP</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Ten SP</label>
          <input type="text" className="form-control" />
        </div>
      </>
    );
  }
}
