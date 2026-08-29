import React from "react";
import { graphql, Link } from "gatsby";
import type { HeadFC } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Button from "../components/button";
import Seo from "../components/seo";
import { useCopy, usePath } from "../i18n/LocaleContext";
import type { LocalePageContext } from "../i18n/copy";
import { copy as allCopy, defaultLocale } from "../i18n/copy";

interface PortfolioPageProps {
  data: {
    allContentfulPortfolio: {
      edges: Array<{
        node: {
          name: string;
          description: {
            raw: string;
          };
          logoImg: {
            gatsbyImageData: any;
          };
          slug: string;
        };
      }>;
    };
  };
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ data }) => {
  const copy = useCopy();
  const path = usePath();
  const edges = data.allContentfulPortfolio.edges;

  return (
    <Layout>
      <div className="mb-12 max-w-[70ch]">
        <h1 className="text-4xl md:text-6xl mb-6">{copy.portfolio.title}</h1>
        <p className="text-lg md:text-xl leading-relaxed">
          {copy.portfolio.intro}
        </p>
      </div>

      {edges.length === 0 ? (
        <p className="text-xl">{copy.portfolio.empty}</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-3 2xl:grid-cols-4">
          {edges.map((item, index) => {
            const { name, logoImg, slug } = item.node;
            const image = getImage(logoImg);
            return (
              <div
                className="flex flex-col border-2 border-black dark:shadow-light duration-300 shadow-dark col-span-1 rounded-lg dark:border-white justify-between"
                key={name}
                data-sal="slide-up"
                data-sal-delay={index * 10}
                data-sal-duration="300"
                data-sal-easing="ease"
              >
                <div className="text-2xl px-4 py-6 border-b-2 border-black dark:border-white">
                  {name && name.length > 0 && <h2>{name}</h2>}
                </div>
                <div className="flex items-center justify-center py-8 bg-white h-full">
                  {image && (
                    <Link to={path(`/portfolio/${slug}`)}>
                      <GatsbyImage
                        className="hover:scale-110 transform duration-300"
                        image={image}
                        alt={name}
                        objectFit="contain"
                      />
                    </Link>
                  )}
                </div>
                <div className="border-t-2 border-black dark:border-white mb-2 text-center">
                  <Link to={path(`/portfolio/${slug}`)}>
                    <Button type="button">{copy.portfolio.cta}</Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Layout>
  );
};

export const query = graphql`
  query allContentfulPortfolioQuery {
    allContentfulPortfolio {
      edges {
        node {
          slug
          stack
          name
          description {
            raw
          }
          logoImg {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default PortfolioPage;

export const Head: HeadFC<object, LocalePageContext> = ({
  pageContext,
}) => {
  const locale = pageContext?.locale || defaultLocale;
  return (
    <Seo
      title={allCopy[locale].nav.portfolio}
      locale={locale}
      basePath={pageContext?.basePath}
    />
  );
};
