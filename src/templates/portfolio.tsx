import React from "react";
import { graphql } from "gatsby";
import type { HeadFC } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { buttonClass } from "../components/button";
import Seo from "../components/seo";
import RetroCover from "../components/retroCover";
import { findProject } from "../data/portfolio";
import { useCopy, useLocale } from "../i18n/LocaleContext";
import type { LocalePageContext } from "../i18n/copy";
import { defaultLocale } from "../i18n/copy";

interface ProjectPageContext extends LocalePageContext {
  slug: string;
}

interface PortfolioTemplateProps {
  data: {
    allFile: {
      nodes: Array<{
        name: string;
        childImageSharp: { gatsbyImageData: any } | null;
      }>;
    };
  };
  pageContext: ProjectPageContext;
}

const PortfolioTemplate: React.FC<PortfolioTemplateProps> = ({
  data,
  pageContext,
}) => {
  const copy = useCopy();
  const locale = useLocale();
  const project = findProject(pageContext.slug);

  if (!project) return <Layout>{copy.portfolio.empty}</Layout>;

  const node = data.allFile.nodes.find((n) => n.name === project.image);
  const image = node?.childImageSharp
    ? getImage(node.childImageSharp.gatsbyImageData)
    : undefined;

  return (
    <Layout>
      {/* Screenshot beside the details from lg (was 2xl, which left laptops
          with a full-width screenshot and the details below the fold). It
          sticks under the header while the details scroll. */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-8">
        <div className="w-full lg:w-7/12 flex lg:sticky lg:top-32">
          {image ? (
            <div className="w-full flex border-2 border-black rounded-lg shadow-dark dark:border-white dark:shadow-light overflow-hidden">
              <GatsbyImage
                className="w-full"
                image={image}
                alt={project.name}
                objectPosition="0% 0%"
                loading="eager"
              />
            </div>
          ) : (
            <RetroCover
              name={project.name}
              className="w-full aspect-[16/10] border-2 border-black dark:border-white rounded-lg shadow-dark dark:shadow-light"
            />
          )}
        </div>

        <div
          className="w-full lg:w-5/12 flex border-2 border-black rounded-lg dark:shadow-light dark:border-white shadow-dark flex-col"
        >
          <div className="p-3 border-b-2 border-black dark:border-white">
            <h1 className="text-3xl md:text-5xl my-3">{project.name}</h1>
          </div>

          <div className="py-4 border-b-2 flex-[2] border-black px-3 dark:border-white mb-2">
            <h2 className="text-2xl mb-4">{copy.portfolio.aboutLabel}:</h2>
            {project.description[locale].map((paragraph) => (
              <p key={paragraph} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="stack m-3">
            <h2 className="text-2xl mb-6">{copy.portfolio.stackLabel}:</h2>
            <ul className="grid grid-cols-1 min-[360px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 sm:mx-4">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="button--wrapper flex justify-center py-3 px-3 text-center">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
              >
                {copy.portfolio.visit}
              </a>
            ) : (
              project.note && <p className="py-4">{project.note[locale]}</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PortfolioTemplateImagesQuery {
    allFile(filter: { relativeDirectory: { eq: "portfolio" } }) {
      nodes {
        name
        childImageSharp {
          # Beside the details from lg, at 7/12 of the row.
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            sizes: "(min-width: 1024px) 58vw, 100vw"
          )
        }
      }
    }
  }
`;

export default PortfolioTemplate;

export const Head: HeadFC<object, ProjectPageContext> = ({ pageContext }) => {
  const project = findProject(pageContext.slug);
  const locale = pageContext?.locale || defaultLocale;
  return (
    <Seo
      title={
        project
          ? `${project.name} — ${project.stack.slice(0, 2).join(", ")} project`
          : "Portfolio"
      }
      description={project?.description[locale][0]}
      locale={locale}
      basePath={pageContext?.basePath}
    />
  );
};
