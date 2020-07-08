import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

function _PrivateRoute({ component: Component, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={(renderProps) => {
        return user ? <Component {...renderProps} /> : <Redirect to="/login" />;
      }}
    />
  );
}

function mapStateToProps(state) {
  return { user: state.user };
}

export const PrivateRoute = connect(mapStateToProps)(_PrivateRoute);
