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

const TYPEKIT = "https://use.typekit.net/thl7qti.css";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="preconnect-typekit"
      rel="preconnect"
      href="https://use.typekit.net"
      crossOrigin="anonymous"
    />,
    <link
      key="preconnect-typekit-p"
      rel="preconnect"
      href="https://p.typekit.net"
      crossOrigin="anonymous"
    />,
    // media="print" then flipped once loaded: the kit never blocks first paint,
    // text shows in the monospace fallback and swaps in when the font arrives.
    // React will not render a string onLoad, so the flip is a real script — and
    // it checks .sheet first in case the stylesheet beat the listener.
    <link
      key="typekit"
      id="typekit-css"
      rel="stylesheet"
      href={TYPEKIT}
      media="print"
    />,
    <script
      key="typekit-swap"
      dangerouslySetInnerHTML={{
        __html:
          "(function(){var l=document.getElementById('typekit-css');" +
          "if(!l)return;function s(){l.media='all'}" +
          "if(l.sheet)s();else l.addEventListener('load',s)})()",
      }}
    />,
    <noscript key="typekit-noscript">
      <link rel="stylesheet" href={TYPEKIT} />
    </noscript>,
  ]);
};
