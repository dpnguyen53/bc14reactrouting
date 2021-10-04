import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actAddUser } from "./modules/actions";

export default function AddUserPage() {
  const loading = useSelector((state) => state.addUserReducer.loading);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(actAddUser(state));
  };

  return (
    <form className="container" onSubmit={handleAddUser}>
      <h3>Add user</h3>
      <div className="form-group">
        <span>Tai khoan</span>
        <input
          className="form-control"
          name="taiKhoan"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>Mat khau</span>
        <input
          className="form-control"
          name="matKhau"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>Ho ten</span>
        <input
          className="form-control"
          name="hoTen"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>Email</span>
        <input
          className="form-control"
          name="email"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>SDT</span>
        <input className="form-control" name="soDt" onChange={handleOnchange} />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Add user
        </button>
      </div>
    </form>
  );
}
