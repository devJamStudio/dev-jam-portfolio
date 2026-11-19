import "./src/styles/global.css";
import React from "react";
import { LocaleProvider } from "./src/i18n/LocaleContext";

const TYPEKIT = "https://use.typekit.net/thl7qti.css";

// Runs before the body paints, so the theme is right on the first frame and
// there is no flash. Replaces the redux store that used to decide this after
// hydration — which is why the toggle never matched the actual theme.
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');
if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}
if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})()`;

export const wrapPageElement = ({ element, props }) => (
  <LocaleProvider
    locale={props.pageContext?.locale}
    basePath={props.pageContext?.basePath}
  >
    {element}
  </LocaleProvider>
);

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
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
    // Body font is served from this site (static/fonts); preload the Latin
    // file so text does not wait for the CSS to be parsed first.
    <link
      key="preload-body-font"
      rel="preload"
      as="font"
      type="font/woff2"
      href="/fonts/instrument-sans-latin.woff2"
      crossOrigin="anonymous"
    />,
    // media="print" then flipped once loaded: font CSS never blocks first
    // paint. React will not render a string onLoad, so the flip is a real
    // script — and it checks .sheet first in case a stylesheet beat it.
    <link
      key="typekit"
      data-async-css=""
      rel="stylesheet"
      href={TYPEKIT}
      media="print"
    />,
    <script
      key="async-css-swap"
      dangerouslySetInnerHTML={{
        __html:
          "document.querySelectorAll('link[data-async-css]').forEach(function(l){" +
          "function s(){l.media='all'}" +
          "if(l.sheet)s();else l.addEventListener('load',s)})",
      }}
    />,
    <noscript key="fonts-noscript">
      <link rel="stylesheet" href={TYPEKIT} />
    </noscript>,
  ]);

  setPreBodyComponents([
    <script key="theme" dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />,
  ]);
};
