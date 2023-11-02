import React from "react";
import { Provider } from "react-redux";
import store from "./ReduxStore";
console.log("store", store);
const ReduxWrapper = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);

export default ReduxWrapper;
