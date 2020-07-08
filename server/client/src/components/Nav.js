import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { LOGOUT_ACTION } from "../redux/actions";

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export const Nav = connect(mapStateToProps)(function ({ dispatch, user }) {
  return (
    <nav>
      <div>This is the nav</div>
      {!user && <Link to="/login">Login</Link>}
      {user && (
        <button
          onClick={() => {
            dispatch({ type: LOGOUT_ACTION });
            localStorage.setItem("token", null);
          }}
        >
          Logout
        </button>
      )}
    </nav>
  );
});
