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
      <div className="mb-6 max-w-[70ch]">
        <h1 className="text-3xl md:text-5xl mb-3">{copy.portfolio.title}</h1>
        <p className="text-base md:text-lg leading-relaxed">
          {copy.portfolio.intro}
        </p>
      </div>

      {projects.length === 0 ? (
        <p className="text-xl">{copy.portfolio.empty}</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3 2xl:grid-cols-4">
          {projects.map((project, index) => {
            const thumb = images.get(project.image || "");
            const image = thumb ? getImage(thumb.gatsbyImageData) : undefined;
            const to = path(`/portfolio/${project.slug}`);

            return (
              <div
                className="reveal flex flex-col border-2 border-black dark:shadow-light duration-300 shadow-dark col-span-1 rounded-lg dark:border-white justify-between"
                style={{ animationDelay: `${index * 60}ms` }}
                key={project.slug}
              >
                <div className="text-xl px-3 py-2 border-b-2 border-black dark:border-white">
                  <h2>{project.name}</h2>
                </div>
                {/* overflow-hidden clips the hover zoom, which used to spill
                    outside the card. The screenshots are 16:10, same as this
                    box, so cover fills it edge to edge without cropping —
                    contain plus padding framed each one in white. */}
                <Link
                  to={to}
                  className="relative overflow-hidden flex items-center justify-center bg-white aspect-[16/10]"
                >
                  {image ? (
                    <GatsbyImage
                      className="h-full w-full hover:scale-105 transform duration-300"
                      image={image}
                      alt={project.name}
                      objectFit="cover"
                      loading={index < 3 ? "eager" : "lazy"}
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
          # FULL_WIDTH + the card's own 16:10 ratio: CONSTRAINED capped the
          # image at 400px inside a wider card, which is where the white
          # margin came from.
          gatsbyImageData(
            layout: FULL_WIDTH
            aspectRatio: 1.6
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
