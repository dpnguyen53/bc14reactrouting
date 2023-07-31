import React, { Component } from "react";
// import NhanVien from "./nhan-vien";
import SanPham from "./san-pham";
import WithCard from "./with-card";

const WrapperCard = WithCard(SanPham);

export default class HocPage extends Component {
  render() {
    return (
      <div>
        {process.env.NODE_ENV}
        <h3>HocPage</h3>
        <WrapperCard />
      </div>
    );
  }
}
