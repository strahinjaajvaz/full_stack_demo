import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Login } from "../Login";
import { Register } from "../Register";
import { Dashboard } from "../Dashboard";
import { Nav } from "../Nav";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export function Routes() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
        <Route component={Dashboard} />
        {/* protected Route */}
      </Switch>
    </BrowserRouter>
  );
}
