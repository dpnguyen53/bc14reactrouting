import { lazy } from "react";
import HomeTemplate from "../containers/HomeTemplate";
import AdminTemplate from "../containers/AdminTemplate";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("containers/HomeTemplate/HomePage")),
  },
  {
    exact: false,
    path: "/about",
    component: lazy(() => import("containers/HomeTemplate/AboutPage")),
  },
  {
    exact: false,
    path: "/list-movie",
    component: lazy(() => import("containers/HomeTemplate/ListMoviePage")),
  },
  {
    exact: false,
    path: "/detail/:id",
    component: lazy(() => import("containers/HomeTemplate/DetailMoviePage")),
  },
  {
    exact: false,
    path: "/hoc",
    component: lazy(() => import("containers/HomeTemplate/HocPage")),
  },
  {
    exact: false,
    path: "/render-props",
    component: lazy(() => import("containers/HomeTemplate/RenderPropsPage")),
  },
  {
    exact: false,
    path: "/hooks",
    component: lazy(() => import("containers/HomeTemplate/HooksPage")),
  },
  {
    exact: false,
    path: "/material",
    component: lazy(() => import("containers/HomeTemplate/MaterialPage")),
  },
];

const routesAdmin = [
  //localhost:3000/dashboard
  {
    exact: false,
    path: "/dashboard",
    component: lazy(() => import("containers/AdminTemplate/DashboardPage")),
  },

  //localhost:3000/add-user
  {
    exact: false,
    path: "/add-user",
    component: lazy(() => import("containers/AdminTemplate/AddUserPage")),
  },
];

function renderRoutesHome() {
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}

function renderRoutesAdmin() {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}

export { renderRoutesHome, renderRoutesAdmin };
