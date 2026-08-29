import React, { createContext, useContext } from "react";
import { copy, defaultLocale, localePath, locales } from "./copy";
import type { Locale } from "./copy";

interface LocaleValue {
  locale: Locale;
  /** This page's path without the locale prefix, e.g. "/about/". */
  basePath: string;
}

const LocaleContext = createContext<LocaleValue>({
  locale: defaultLocale,
  basePath: "/",
});

export const LocaleProvider: React.FC<{
  locale?: Locale;
  basePath?: string;
  children: React.ReactNode;
}> = ({ locale, basePath, children }) => (
  <LocaleContext.Provider
    value={{ locale: locale || defaultLocale, basePath: basePath || "/" }}
  >
    {children}
  </LocaleContext.Provider>
);

export const useLocale = (): Locale => useContext(LocaleContext).locale;

/** Copy for the current locale. */
export const useCopy = () => copy[useLocale()];

/** Prefixes an internal path with the current locale. */
export const usePath = () => {
  const locale = useLocale();
  return (path: string) => localePath(path, locale);
};

/** The other locale, and this same page's path in it. */
export const useAltLocale = (): { locale: Locale; href: string } => {
  const { locale, basePath } = useContext(LocaleContext);
  const alt = locales.find((l) => l !== locale) || defaultLocale;
  return { locale: alt, href: localePath(basePath, alt) };
};
