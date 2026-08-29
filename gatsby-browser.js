import "./src/styles/global.css";
import React from "react";
import { LocaleProvider } from "./src/i18n/LocaleContext";

export const wrapPageElement = ({ element, props }) => (
  <LocaleProvider
    locale={props.pageContext?.locale}
    basePath={props.pageContext?.basePath}
  >
    {element}
  </LocaleProvider>
);
