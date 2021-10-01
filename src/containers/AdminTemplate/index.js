import React from "react";
import { Route, Redirect } from "react-router-dom";
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
      render={(propsRoute) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <LayoutAdmin>
              <Component {...propsRoute} />
            </LayoutAdmin>
          );
        }

        //redirect ve /auth
        return <Redirect to="/auth" />;
      }}
    />
  );
}
