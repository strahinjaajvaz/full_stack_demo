import React, { useState } from "react";
import { connect } from "react-redux";

import { register } from "../redux/actions";

import { registerAPI } from "../api/auth";

const DEFAULT_STATE = {
  email: "",
  password: "",
};

export function RegisterForm(props) {
  const [state, setState] = useState(DEFAULT_STATE);

  function onTextChange({ target: { name, value } }) {
    setState({ ...state, [name]: value });
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const { registerUser } = props;

        const { email, password } = state;
        if (!email || !password) return;

        const { data } = await registerAPI({ email, password });
        registerUser(data.data);
      }}
    >
      <input
        type="text"
        placeholder="email"
        required
        name="email"
        onChange={onTextChange}
        value={state.email}
      />
      <input
        type="password"
        placeholder="password"
        required
        name="password"
        onChange={onTextChange}
        value={state.password}
      />
      <button type="submit">Click to Register</button>
    </form>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser(data) {
      dispatch(register(data));
    },
  };
}

export const Register = connect(() => ({}), mapDispatchToProps)(RegisterForm);
