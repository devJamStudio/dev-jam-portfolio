import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import type { HeadFC } from "gatsby";
import { useCopy } from "../i18n/LocaleContext";
import type { LocalePageContext } from "../i18n/copy";
import { copy as allCopy, defaultLocale } from "../i18n/copy";

const About: React.FC = () => {
  const copy = useCopy();

  return (
    <Layout>
      <div className="max-w-[70ch] mx-auto">
        <h1 className="text-3xl md:text-5xl leading-tight mb-6">
          {copy.about.title}
        </h1>

        {copy.about.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph}
            className="text-base md:text-lg leading-relaxed mb-4"
          >
            {paragraph}
          </p>
        ))}

        <div
          className="border-2 border-black dark:border-white shadow-dark dark:shadow-light rounded-lg p-4 mt-6"
        >
          <h2 className="text-2xl mb-4">{copy.about.doesTitle}</h2>
          <ul className="flex flex-col gap-2.5">
            {copy.about.does.map((item) => (
              <li key={item} className="text-base leading-relaxed">
                — {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default About;

export const Head: HeadFC<object, LocalePageContext> = ({
  pageContext,
}) => {
  const locale = pageContext?.locale || defaultLocale;
  return (
    <Seo
      title={allCopy[locale].nav.about}
      locale={locale}
      basePath={pageContext?.basePath}
    />
  );
};
