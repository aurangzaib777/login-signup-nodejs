import React, { lazy, Suspense } from "react";
import { ProtectedRoutes } from "../../protected_routes/protected.routes";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Loader from "../loader/loader";
const Home = lazy(() => import("../pages/home"));
const LogIn = lazy(() => import("../pages/login"));
const Signup = lazy(() => import("../pages/signup"));
const SuccesfullyLogedIn = lazy(() =>
  import("../../components/successfully_logIn/successfullyLogedIn.jsx")
);
const App = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoutes path="/login" component={LogIn} />
          <ProtectedRoutes path="/signup" component={Signup} />
          <ProtectedRoutes
            path="/successfullyLogedIn"
            component={SuccesfullyLogedIn}
          />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};

export default App;
