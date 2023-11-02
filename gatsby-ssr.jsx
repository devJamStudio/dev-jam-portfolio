import "./src/styles/global.css";
import React from "react";

import ReduxWrapper from "./src/ReduxWrapper";
export const wrapRootElement = ({ element }) => (
  <ReduxWrapper element={element} />
);
