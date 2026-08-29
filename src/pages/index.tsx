import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import Typewriter from "typewriter-effect";
import Layout from "../components/layout";
import Button from "../components/button";
import Seo from "../components/seo";
import { useCopy, usePath } from "../i18n/LocaleContext";
import type { LocalePageContext } from "../i18n/copy";
import { copy as allCopy, defaultLocale } from "../i18n/copy";

const IndexPage: React.FC<PageProps> = () => {
  const copy = useCopy();
  const path = usePath();

  return (
    <Layout>
      {/* The typewriter only paints client-side, so the real heading ships as
          text and the animation is decorative. */}
      <h1 className="sr-only">{copy.index.heading}</h1>

      <div
        aria-hidden="true"
        className="mt-10 leading-tight font-ocr text-black dark:text-white text-[3rem] m:text-[5rem] md:text-[7rem] xl:text-[8rem] 2xl:text-[12rem] mr-10"
      >
        <Typewriter
          options={{
            strings: copy.index.slogans,
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </div>

      <p
        className="mt-12 max-w-[60ch] text-xl md:text-2xl 2xl:text-3xl leading-relaxed"
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="600"
        data-sal-easing="ease"
      >
        {copy.index.tagline}
      </p>

      <div className="flex flex-row flex-wrap gap-6 items-center">
        <Link to={path("/offer")}>
          <Button type="button">{copy.index.ctaOffer}</Button>
        </Link>
        <Link to={path("/contact")}>
          <Button type="button">{copy.index.ctaContact}</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC<object, LocalePageContext> = ({
  pageContext,
}) => {
  const locale = pageContext?.locale || defaultLocale;
  return (
    <Seo
      title={allCopy[locale].nav.home}
      locale={locale}
      basePath={pageContext?.basePath}
    />
  );
};
