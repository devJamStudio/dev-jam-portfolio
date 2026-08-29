import React from "react";
import { Link } from "gatsby";
import type { HeadFC } from "gatsby";
import Layout from "../components/layout";
import Button from "../components/button";
import Seo from "../components/seo";
import { offers } from "../data/offers";
import { useCopy, useLocale, usePath } from "../i18n/LocaleContext";
import type { LocalePageContext } from "../i18n/copy";
import { copy as allCopy, defaultLocale } from "../i18n/copy";

const Offer: React.FC = () => {
  const copy = useCopy();
  const locale = useLocale();
  const path = usePath();

  return (
    <Layout>
      <div className="mb-6 max-w-[70ch]">
        <h1 className="text-3xl md:text-5xl mb-3">{copy.offer.title}</h1>
        <p className="text-base md:text-lg leading-relaxed">{copy.offer.intro}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className="reveal border-2 px-4 flex flex-col justify-between border-black dark:shadow-light shadow-dark py-4 rounded-lg dark:border-white"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <h2 className="text-center mt-2 text-2xl">{offer.name[locale]}</h2>
            <ul className="text-center mt-4 mb-2">
              {offer.features[locale].map((feature) => (
                <li className="text-sm py-1.5 leading-snug" key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
            <div>
              <div className="text-center flex flex-col text-lg mt-2">
                {offer.pricePln && offer.priceEuro ? (
                  <>
                    <span>
                      {copy.offer.from}: {offer.pricePln} PLN
                    </span>
                    <span>/ {offer.priceEuro} EURO</span>
                  </>
                ) : (
                  <span>{copy.offer.quote}</span>
                )}
              </div>
              <div className="text-center">
                <Link to={path("/contact")}>
                  <Button type="button">{copy.offer.cta}</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
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
