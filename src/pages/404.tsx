import * as React from "react";
import { Link } from "gatsby";
import type { HeadFC } from "gatsby";
import Layout from "../components/layout";
import Button from "../components/button";
import Seo from "../components/seo";
import { useCopy, usePath } from "../i18n/LocaleContext";
import type { LocalePageContext } from "../i18n/copy";
import { copy as allCopy, defaultLocale } from "../i18n/copy";

const NotFoundPage: React.FC = () => {
  const copy = useCopy();
  const path = usePath();

  return (
    <Layout>
      <div className="max-w-[60ch] mx-auto text-center mt-20">
        <h1 className="text-5xl md:text-7xl mb-8">{copy.notFound.title}</h1>
        <p className="text-lg md:text-xl leading-relaxed">
          {copy.notFound.body}
        </p>
        <Link to={path("/")}>
          <Button type="button">{copy.notFound.cta}</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC<object, LocalePageContext> = ({
  pageContext,
}) => {
  const locale = pageContext?.locale || defaultLocale;
  return (
    <Seo
      title={allCopy[locale].notFound.title}
      locale={locale}
      basePath={pageContext?.basePath}
    />
  );
};
