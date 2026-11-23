import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { buttonClass } from "../components/button";
import Seo from "../components/seo";
import { useCopy, useLocale, usePath } from "../i18n/LocaleContext";
import { projects } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import type { LocalePageContext } from "../i18n/copy";
import { copy as allCopy, defaultLocale } from "../i18n/copy";

const IndexPage: React.FC<PageProps> = () => {
  const copy = useCopy();
  const path = usePath();
  const locale = useLocale();
  const typewriter = useTypewriter(copy.index.slogans);

  return (
    <Layout>
      {/* Header + this column fill the first screen, so the CTAs sit on the
          fold and the footer starts below it. The min-height subtracts the
          header and main's padding (84px + 3rem on phones, 110px + 5rem from
          md); without it the footer squeezed the slogan box and cut lines. */}
      <div className="hero flex flex-1 flex-col overflow-hidden min-h-[calc(100svh-8rem)] md:min-h-[calc(100svh-11.875rem)]">
        {/* The typewriter only paints client-side, so the real heading ships
            as text and the animation is decorative. */}
        <h1 className="sr-only">{copy.index.heading}</h1>

        {/* The typewriter box takes the slack rather than sizing itself to its
            text. That fills the screen and, more importantly, stops the box
            height depending on how many lines the current slogan wraps to —
            which is what caused the layout shift. min-h keeps two lines visible on
            short windows (the page scrolls instead); overflow-hidden stops a long string reopening it. */}
        <div
          aria-hidden="true"
          className="hero-slogan relative flex-1 min-h-[3.2em] overflow-hidden mt-6 leading-tight font-ocr text-black dark:text-white text-[length:clamp(3rem,min(10vw,12svh),8rem)] mr-10"
        >
          <div ref={typewriter} className="absolute inset-0">
            {copy.index.slogans[0]}
          </div>
        </div>

        <p className="max-w-[40ch] mt-4 text-xl md:text-2xl leading-relaxed">
          {copy.index.tagline}
        </p>

        <div className="flex flex-row flex-wrap gap-x-6 gap-y-1 items-center pt-6">
          <Link to={path("/offer")} className={buttonClass}>
            {copy.index.ctaOffer}
          </Link>
          <Link to={path("/contact")} className={buttonClass}>
            {copy.index.ctaContact}
          </Link>
        </div>
      </div>

      {/* Below the fold: what the studio does and proof of it. The hero alone
          gave visitors and search engines one sentence to go on. */}
      <section className="pt-14 md:pt-20">
        <h2 className="text-2xl md:text-4xl mb-6">{copy.index.pillarsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {copy.index.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="border-2 border-black dark:border-white rounded-lg shadow-dark dark:shadow-light p-6"
            >
              <h3 className="text-2xl mb-3">{pillar.title}</h3>
              <p className="text-lg leading-relaxed mb-4">{pillar.body}</p>
              <ul>
                {pillar.points.map((point) => (
                  <li key={point} className="py-1 leading-snug pl-5 -indent-5">
                    — {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-14 md:pt-20 pb-6">
        <h2 className="text-2xl md:text-4xl mb-6">{copy.index.recentTitle}</h2>
        <ul className="border-t-2 border-black dark:border-white">
          {projects.slice(0, 4).map((project) => (
            <li
              key={project.slug}
              className="border-b-2 border-black dark:border-white"
            >
              <Link
                to={path(`/portfolio/${project.slug}`)}
                className="group grid md:grid-cols-[16rem_1fr] gap-x-6 gap-y-1 py-4"
              >
                <span className="font-ocr text-xl group-hover:text-pink-600 dark:group-hover:text-teal-300">
                  {project.name}
                </span>
                <span className="leading-relaxed">
                  {project.description[locale][0]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={path("/portfolio")} className={buttonClass + " mt-6"}>
          {copy.index.allWork}
        </Link>
      </section>
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
