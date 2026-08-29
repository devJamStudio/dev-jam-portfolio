import "./src/styles/font.css";
import "./src/styles/global.css";
import React from "react";

import ReduxWrapper from "./src/ReduxWrapper";
import { LocaleProvider } from "./src/i18n/LocaleContext";

export const wrapRootElement = ({ element }) => (
  <ReduxWrapper element={element} />
);

export const wrapPageElement = ({ element, props }) => (
  <LocaleProvider
    locale={props.pageContext?.locale}
    basePath={props.pageContext?.basePath}
  >
    {element}
  </LocaleProvider>
);
