import React from "react";
import { graphql, Link } from "gatsby";
import type { HeadFC } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Button from "../components/button";
import Seo from "../components/seo";
import { projects } from "../data/portfolio";
import { useCopy, useLocale, usePath } from "../i18n/LocaleContext";
import type { LocalePageContext } from "../i18n/copy";
import { copy as allCopy, defaultLocale } from "../i18n/copy";

interface PortfolioPageProps {
  data: {
    allFile: {
      nodes: Array<{
        name: string;
        childImageSharp: { gatsbyImageData: any } | null;
      }>;
    };
  };
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ data }) => {
  const copy = useCopy();
  const locale = useLocale();
  const path = usePath();

  const images = new Map(
    data.allFile.nodes.map((node) => [node.name, node.childImageSharp]),
  );

  return (
    <Layout>
      <div className="mb-12 max-w-[70ch]">
        <h1 className="text-4xl md:text-6xl mb-6">{copy.portfolio.title}</h1>
        <p className="text-lg md:text-xl leading-relaxed">
          {copy.portfolio.intro}
        </p>
      </div>

      {projects.length === 0 ? (
        <p className="text-xl">{copy.portfolio.empty}</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-3 2xl:grid-cols-4">
          {projects.map((project, index) => {
            const thumb = images.get(project.logo || project.image || "");
            const image = thumb ? getImage(thumb.gatsbyImageData) : undefined;
            const to = path(`/portfolio/${project.slug}`);

            return (
              <div
                className="flex flex-col border-2 border-black dark:shadow-light duration-300 shadow-dark col-span-1 rounded-lg dark:border-white justify-between"
                key={project.slug}
                data-sal="slide-up"
                data-sal-delay={index * 10}
                data-sal-duration="300"
                data-sal-easing="ease"
              >
                <div className="text-2xl px-4 py-6 border-b-2 border-black dark:border-white">
                  <h2>{project.name}</h2>
                </div>
                <Link
                  to={to}
                  className="flex items-center justify-center py-8 bg-white h-full"
                >
                  {image ? (
                    <GatsbyImage
                      className="hover:scale-110 transform duration-300"
                      image={image}
                      alt={project.name}
                      objectFit="contain"
                    />
                  ) : (
                    // Not every project has a screenshot to show — an unlaunched
                    // site has nothing to point a camera at.
                    <span className="font-ocr text-4xl text-black px-6 text-center">
                      {project.name}
                    </span>
                  )}
                </Link>
                <div className="border-t-2 border-black dark:border-white mb-2 text-center">
                  <Link to={to}>
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
  query PortfolioImagesQuery {
    allFile(filter: { relativeDirectory: { eq: "portfolio" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 400
            placeholder: BLURRED
          )
        }
      }
    }
  }
`;

export default PortfolioPage;

export const Head: HeadFC<object, LocalePageContext> = ({ pageContext }) => {
  const locale = pageContext?.locale || defaultLocale;
  return (
    <Seo
      title={allCopy[locale].nav.portfolio}
      locale={locale}
      basePath={pageContext?.basePath}
    />
  );
};
