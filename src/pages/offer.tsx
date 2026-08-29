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
      <div className="mb-12 max-w-[70ch]">
        <h1 className="text-4xl md:text-6xl mb-6">{copy.offer.title}</h1>
        <p className="text-lg md:text-xl leading-relaxed">{copy.offer.intro}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 2xl:gap-12">
        {offers.map((offer, index) => (
          <div
            data-sal="slide-up"
            data-sal-delay={index * 30}
            data-sal-duration="500"
            data-sal-easing="ease"
            key={offer.id}
            className="border-2 px-4 flex flex-col justify-between border-black dark:shadow-light shadow-dark py-4 rounded-lg dark:border-white"
          >
            <h2 className="text-center mt-4 text-4xl">{offer.name[locale]}</h2>
            <ul className="text-center mt-8 my-4">
              {offer.features[locale].map((feature) => (
                <li className="text-lg py-2" key={feature}>
                  {feature}
                  <span className="block mt-2 opacity-60">-</span>
                </li>
              ))}
            </ul>
            <div>
              <div className="text-center flex flex-col text-2xl mt-3">
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
