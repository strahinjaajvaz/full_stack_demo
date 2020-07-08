import { LOGIN_ACTION, REGISTER_ACTION, LOGOUT_ACTION } from "./actions";

const DEFAULT_STATE = {};

export function AuthReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, user: action.payload };
    case REGISTER_ACTION:
      return { ...state, user: action.payload };
    case LOGOUT_ACTION:
      return DEFAULT_STATE;
    default:
      return state;
  }
}
