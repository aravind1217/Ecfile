import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";


import Dashboard from "./dashboard/Dashboard";

import Error404 from "./error-pages/Error404";
import Error500 from "./error-pages/Error500";
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './pages/ProtectedRoute'
class AppPrivateRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          
          <ProtectedRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          
          <Route path="*" exact={true} component={Error404} />

          <Route
            exact
            path="/error-pages/error-500"
            component={Error500}
          />

         
        </Switch>
      </Suspense>
    );
  }
}

export default AppPrivateRoutes;
