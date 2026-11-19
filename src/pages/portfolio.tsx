import React from "react";
import { graphql, Link } from "gatsby";
import type { HeadFC } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import RetroCover from "../components/retroCover";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const thumb = images.get(project.image || "");
            const image = thumb ? getImage(thumb.gatsbyImageData) : undefined;

            // The whole card is one link: one tab stop, one big target. The
            // entrance animation sits on a wrapper because its fill mode would
            // otherwise pin transform and cancel the hover press.
            return (
              <div
                key={project.slug}
                className="reveal"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <Link
                  to={path(`/portfolio/${project.slug}`)}
                  className="group h-full flex flex-col border-2 border-black dark:border-white rounded-lg overflow-hidden shadow-dark dark:shadow-light hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none dark:hover:shadow-none transition duration-200 motion-reduce:transition-none"
                >
                  {/* Screenshots are 16:10 like this box, so cover fills it
                      edge to edge. An unlaunched project shows its name. */}
                  <div className="relative aspect-[16/10] overflow-hidden flex items-center justify-center border-b-2 border-black dark:border-white bg-teal-100 dark:bg-white/10">
                    {image ? (
                      <GatsbyImage
                        className="h-full w-full group-hover:scale-105 transition-transform duration-300 motion-reduce:transition-none"
                        image={image}
                        alt=""
                        objectFit="cover"
                        objectPosition="50% 0%"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    ) : (
                      <RetroCover name={project.name} className="h-full w-full" />
                    )}
                  </div>
                  <div className="flex flex-col flex-1 gap-2 p-4">
                    <h2 className="text-xl">{project.name}</h2>
                    <p className="leading-relaxed line-clamp-2">
                      {project.description[locale][0]}
                    </p>
                    <ul className="flex flex-wrap gap-2 mt-auto pt-2">
                      {project.stack.slice(0, 3).map((tech) => (
                        <li
                          key={tech}
                          className="font-ocr text-xs border-2 border-black dark:border-white rounded-full px-2.5 py-0.5"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
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
            # Matches the grid (1 col, 2 from sm, 3 from lg inside the 7xl container).
            # The default is 100vw, so a third-width card pulled a full-width image.
            sizes: "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            # 480 for desktop cards (~450px wide); the default starts at 750.
            breakpoints: [480, 750, 1080, 1366, 1920]
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
