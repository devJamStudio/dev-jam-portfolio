import React from "react";
import { useCopy } from "../i18n/LocaleContext";
import { EMAIL, GITHUB_URL } from "../data/site";

const link =
  "underline decoration-2 underline-offset-4 decoration-pink-400 dark:decoration-teal-300 hover:text-pink-600 dark:hover:text-teal-300";

const Footer: React.FC = () => {
  const copy = useCopy();

  return (
    <footer className="border-t-2 border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p className="font-ocr text-xl">{copy.footer.cta}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={`mailto:${EMAIL}`} className={link}>
            {EMAIL}
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            GitHub
          </a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} devJam Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
