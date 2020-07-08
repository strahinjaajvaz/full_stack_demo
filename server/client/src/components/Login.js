import React, { useState } from "react";
import { connect } from "react-redux";

import { login } from "../redux/actions";

import { loginAPI } from "../api/auth";

const DEFAULT_STATE = {
  email: "",
  password: "",
};

function LoginForm({ loginUser }) {
  const [state, setState] = useState(DEFAULT_STATE);
  const [loading, setLoading] = useState(false);

  function onTextChange({ target: { name, value } }) {
    setState({ ...state, [name]: value });
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const { email, password } = state;
          if (!email || !password) return;

          setLoading(true);
          const { data } = await loginAPI({ email, password });
          localStorage.setItem("token", data.data.token);
          setLoading(false);

          loginUser(data.data);
        } catch (err) {
          setLoading(false);
          console.log(err);
        }
      }}
    >
      <input
        type="text"
        placeholder="email"
        name="email"
        required
        onChange={onTextChange}
        value={state.email}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        required
        onChange={onTextChange}
        value={state.password}
      />
      <button type="submit" disabled={loading}>
        Click to login
      </button>
    </form>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (data) => dispatch(login(data)),
  };
}

export const Login = connect(() => ({}), mapDispatchToProps)(LoginForm);
