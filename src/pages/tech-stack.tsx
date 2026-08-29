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
      <div className="mb-12 max-w-[70ch]">
        <h1 className="text-4xl md:text-6xl mb-6">{copy.stack.title}</h1>
        <p className="text-lg md:text-xl leading-relaxed">{copy.stack.intro}</p>
      </div>

      {stackGroups.map((group) => (
        <section key={group.id} className="mb-16">
          <h2 className="text-3xl mb-8 border-b-2 border-black dark:border-white pb-3">
            {copy.stack.groups[group.id]}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
            {group.items.map((tech, index) => (
              <div
                key={tech.name}
                className="reveal border-2 aspect-square rounded-lg dark:shadow-light dark:border-white shadow-dark border-black flex flex-col justify-between"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <div className="text-2xl p-4 border-b-2 border-black dark:border-white">
                  <h3>{tech.name}</h3>
                </div>
                <div className="p-4 flex items-center m-4 justify-center h-full">
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
