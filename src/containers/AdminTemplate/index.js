import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./_components/Navbar";

function LayoutAdmin(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default function AdminTemplate(props) {
  const { exact, path, Component } = props;
  return (
    <LayoutAdmin>
      <Route exact={exact} path={path} component={Component} />
    </LayoutAdmin>
  );
}
