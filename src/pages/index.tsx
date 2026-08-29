import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Button from "../components/button";
import Seo from "../components/seo";
import { useCopy, usePath } from "../i18n/LocaleContext";
import { useTypewriter } from "../hooks/useTypewriter";
import type { LocalePageContext } from "../i18n/copy";
import { copy as allCopy, defaultLocale } from "../i18n/copy";

const IndexPage: React.FC<PageProps> = () => {
  const copy = useCopy();
  const path = usePath();
  const typewriter = useTypewriter(copy.index.slogans);

  return (
    <Layout>
      {/* Header + this column are exactly one viewport tall, so the hero ends
          at the fold and the CTAs sit on the ground — no position:fixed. */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* The typewriter only paints client-side, so the real heading ships
            as text and the animation is decorative. */}
        <h1 className="sr-only">{copy.index.heading}</h1>

        {/* The typewriter box takes the slack rather than sizing itself to its
            text. That fills the screen and, more importantly, stops the box
            height depending on how many lines the current slogan wraps to —
            which is what caused the layout shift. min-h-0 lets it shrink under
            its content; overflow-hidden stops a long string reopening it. */}
        <div
          aria-hidden="true"
          className="relative flex-1 min-h-0 overflow-hidden mt-6 leading-tight font-ocr text-black dark:text-white text-[3rem] m:text-[5rem] md:text-[7rem] xl:text-[8rem] 2xl:text-[12rem] mr-10"
        >
          <div ref={typewriter} className="absolute inset-0">
            {copy.index.slogans[0]}
          </div>
        </div>

        <p className="max-w-[60ch] text-lg md:text-xl 2xl:text-2xl leading-relaxed">
          {copy.index.tagline}
        </p>

        <div className="flex flex-row flex-wrap gap-6 items-center pt-8">
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

export const Head: HeadFC<object, LocalePageContext> = ({ pageContext }) => {
  const locale = pageContext?.locale || defaultLocale;
  return (
    <Seo
      title={allCopy[locale].nav.home}
      locale={locale}
      basePath={pageContext?.basePath}
    />
  );
};
