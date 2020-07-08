import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

function _PublicRoute({ component: Component, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={(renderProps) => {
        return user ? <Redirect to="/" /> : <Component {...renderProps} />;
      }}
    />
  );
}

function mapStateToProps(state) {
  return { user: state.user };
}

export const PublicRoute = connect(mapStateToProps)(_PublicRoute);
