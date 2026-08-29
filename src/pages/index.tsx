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

  const longestSlogan = copy.index.slogans.reduce((longest, slogan) =>
    slogan.length > longest.length ? slogan : longest,
  );

  return (
    <Layout>
      {/* flex-1 + mt-auto on the buttons drops them to the bottom of the first
          screen without position:fixed, so they scroll away with the page
          instead of sitting on top of the content below. */}
      <div className="flex flex-1 flex-col">
      {/* The typewriter only paints client-side, so the real heading ships as
          text and the animation is decorative. */}
      <h1 className="sr-only">{copy.index.heading}</h1>

      {/* The typewriter grows and shrinks as it types, which shoved everything
          below it up and down — 0.396 CLS, almost all of it from here. The
          longest slogan is rendered invisibly to hold the box open and the
          animation is overlaid on top, so the height is whatever the tallest
          string needs at this width and never changes. Measured, not guessed:
          the box swings between 1.25em and 5em depending on viewport. */}
      <div
        aria-hidden="true"
        className="relative mt-10 leading-tight font-ocr text-black dark:text-white text-[3rem] m:text-[5rem] md:text-[7rem] xl:text-[8rem] 2xl:text-[12rem] mr-10"
      >
        <span className="invisible block" aria-hidden="true">
          {longestSlogan}
        </span>
        <div className="absolute inset-0">
          <Typewriter
            options={{
              strings: copy.index.slogans,
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
      </div>

      <p className="mt-12 max-w-[60ch] text-xl md:text-2xl 2xl:text-3xl leading-relaxed">
        {copy.index.tagline}
      </p>

      <div className="mt-auto flex flex-row flex-wrap gap-6 items-center pt-12">
        <Link to={path("/offer")}>
          <Button type="button">{copy.index.ctaOffer}</Button>
        </Link>
        <Link to={path("/contact")}>
          <Button type="button">{copy.index.ctaContact}</Button>
        </Link>
      </div>
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
