import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createReduxStore } from "./redux/createStore";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createReduxStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
