import React from "react";
import { Link } from "gatsby";
import { useAltLocale, useCopy } from "../i18n/LocaleContext";

const LangToggle: React.FC = () => {
  const { locale, href } = useAltLocale();
  const copy = useCopy();

  return (
    <Link
      to={href}
      hrefLang={locale}
      aria-label={`Switch language to ${locale.toUpperCase()}`}
      className="border-2 border-black dark:border-white shadow-dark dark:shadow-light rounded-lg px-3 py-1 text-lg hover:bg-teal-400 dark:hover:bg-amber-600 duration-200"
    >
      {copy.langLabel}
    </Link>
  );
};

export default LangToggle;
