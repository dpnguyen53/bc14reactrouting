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

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsRoute) => (
        <LayoutAdmin>
          <Component {...propsRoute} />
        </LayoutAdmin>
      )}
    />
  );
}
