import React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { stackGroups } from "../data/stack";
import { useCopy } from "../i18n/LocaleContext";
import type { LocalePageContext } from "../i18n/copy";
import { copy as allCopy, defaultLocale } from "../i18n/copy";

const TechStack: React.FC = () => {
  const copy = useCopy();

  return (
    <Layout>
      <div className="mb-6 max-w-[70ch]">
        <h1 className="text-3xl md:text-5xl mb-3">{copy.stack.title}</h1>
        <p className="text-base md:text-lg leading-relaxed">{copy.stack.intro}</p>
      </div>

      {stackGroups.map((group) => (
        <section key={group.id} className="mb-8">
          <h2 className="text-2xl mb-4 border-b-2 border-black dark:border-white pb-2">
            {copy.stack.groups[group.id]}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
            {group.items.map((tech, index) => (
              <div
                key={tech.name}
                className="reveal border-2 aspect-[4/3] rounded-lg dark:shadow-light dark:border-white shadow-dark border-black flex flex-col justify-between"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <div className="text-sm p-2 border-b-2 border-black dark:border-white">
                  <h3>{tech.name}</h3>
                </div>
                <div className="p-3 flex items-center justify-center h-full">
                  <div dangerouslySetInnerHTML={{ __html: tech.logo }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default TechStack;

export const Head: HeadFC<object, LocalePageContext> = ({
  pageContext,
}) => {
  const locale = pageContext?.locale || defaultLocale;
  return (
    <Seo
      title={allCopy[locale].nav.stack}
      locale={locale}
      basePath={pageContext?.basePath}
    />
  );
};
