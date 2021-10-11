import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { renderRoutesHome, renderRoutesAdmin } from "./routes";
import { actTryLogin } from "./containers/AdminTemplate/AuthPage/modules/actions";
import { useDispatch } from "react-redux";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch actTryLogin
    dispatch(actTryLogin(props.history));
  }, []);

  return (
    <Suspense fallback={<div>Loaing...</div>}>
      <Switch>
        {renderRoutesHome()}
        {renderRoutesAdmin()}

        {/* Trang chu - localhost:3000 */}
        {/* <Route exact path="/" component={HomePage} /> */}

        {/* Trang About - localhost:3000/about */}
        {/* <Route path="/about" component={AboutPage} /> */}

        {/* Trang list movie - localhost:3000/list-movie */}
        {/* <Route path="/list-movie" component={ListMoviePage} /> */}

        <Route
          path="/auth"
          component={lazy(() => import("containers/AdminTemplate/AuthPage"))}
        />

        {/* Trang k ton tai - de o cuoi cung */}
        <Route
          path=""
          component={lazy(() => import("containers/PageNotFound"))}
        />
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);
