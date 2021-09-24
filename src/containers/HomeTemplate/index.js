import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./_component/Navbar";

function LayoutHome(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default function HomeTemplate(props) {
  const { exact, path, Component } = props;
  return (
    <LayoutHome>
      <Route exact={exact} path={path} component={Component} />
    </LayoutHome>
  );
}
