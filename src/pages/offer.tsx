import React from "react";
import { Link } from "gatsby";
import type { HeadFC } from "gatsby";
import Layout from "../components/layout";
import { buttonClass } from "../components/button";
import Seo from "../components/seo";
import { offers } from "../data/offers";
import type { Offer as OfferData } from "../data/offers";
import { useCopy, useLocale, usePath } from "../i18n/LocaleContext";
import type { LocalePageContext } from "../i18n/copy";
import { copy as allCopy, defaultLocale } from "../i18n/copy";

const card =
  "reveal flex flex-col border-2 border-black dark:border-white rounded-lg shadow-dark dark:shadow-light p-6";

const OfferCard: React.FC<{ offer: OfferData; index: number }> = ({
  offer,
  index,
}) => {
  const copy = useCopy();
  const locale = useLocale();
  const path = usePath();
  const priced = offer.pricePln && offer.priceEuro;

  return (
    <div className={card} style={{ animationDelay: `${index * 60}ms` }}>
      <h3 className="text-2xl">{offer.name[locale]}</h3>
      {/* Price sits right under the name: it is the first thing people look
          for, and it used to hide at the bottom of the card. */}
      <p className="font-ocr mt-3 pb-4 border-b-2 border-black dark:border-white">
        {priced ? (
          <>
            <span className="text-sm">{copy.offer.from} </span>
            <span className="text-3xl">{offer.pricePln} PLN</span>
            <span className="text-sm"> / {offer.priceEuro} EUR</span>
          </>
        ) : (
          <span className="text-xl">{copy.offer.quote}</span>
        )}
      </p>
      <ul className="flex-1 my-4">
        {offer.features[locale].map((feature) => (
          <li className="py-1.5 leading-snug pl-5 -indent-5" key={feature}>
            — {feature}
          </li>
        ))}
      </ul>
      <Link to={path("/contact")} className={`${buttonClass} self-start`}>
        {copy.offer.cta}
      </Link>
    </div>
  );
};

const Offer: React.FC = () => {
  const copy = useCopy();
  // Two kinds of work, priced differently: scoped per project vs. packages.
  const scoped = offers.filter((offer) => !offer.pricePln);
  const packages = offers.filter((offer) => offer.pricePln);

  return (
    <Layout>
      <div className="mb-10 max-w-[60ch]">
        <h1 className="text-3xl md:text-5xl mb-4">{copy.offer.title}</h1>
        <p className="text-lg md:text-xl leading-relaxed">{copy.offer.intro}</p>
      </div>

      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl mb-2">{copy.offer.scopedTitle}</h2>
        <p className="mb-6 max-w-[60ch] leading-relaxed">
          {copy.offer.scopedIntro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scoped.map((offer, index) => (
            <OfferCard key={offer.id} offer={offer} index={index} />
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl mb-2">{copy.offer.webTitle}</h2>
        <p className="mb-6 max-w-[60ch] leading-relaxed">
          {copy.offer.webIntro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((offer, index) => (
            <OfferCard key={offer.id} offer={offer} index={index} />
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl md:text-3xl mb-6">{copy.offer.stepsTitle}</h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.offer.steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="font-ocr text-4xl text-pink-600 dark:text-teal-300">
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl mb-1">{step.title}</h3>
                <p className="leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  );
};

export default Offer;

export const Head: HeadFC<object, LocalePageContext> = ({
  pageContext,
}) => {
  const locale = pageContext?.locale || defaultLocale;
  return (
    <Seo
      title={allCopy[locale].nav.offer}
      locale={locale}
      basePath={pageContext?.basePath}
    />
  );
};
