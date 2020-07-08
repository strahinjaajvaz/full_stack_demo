export const LOGIN_ACTION = "@@REDUX/LOGIN_ACTION";
export const REGISTER_ACTION = "@@REDUX/REGISTER_ACTION";
export const ADD_USER_ACTION = "@@REDUX/ADD_USER_ACTION";
export const LOGOUT_ACTION = "@@REDUX/LOGOUT_ACTION";

export function login(payload) {
  return {
    type: LOGIN_ACTION,
    payload,
  };
}

export function register(payload) {
  return {
    type: REGISTER_ACTION,
    payload,
  };
}

export function addUser(payload) {
  return {
    type: LOGIN_ACTION,
    payload,
  };
}
