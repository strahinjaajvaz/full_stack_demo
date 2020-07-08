import { createStore } from "redux";
import { AuthReducer } from "./authReducer";

export function createReduxStore() {
  return createStore(
    AuthReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
