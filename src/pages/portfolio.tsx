import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Seo from "../components/seo";
import type { HeadFC } from "gatsby";
interface PortfolioPageProps {
  data: {
    allContentfulPortfolio: {
      edges: Array<{
        node: {
          name: string;
          description: {
            raw: string;
          };
          ThumbImg: {
            gatsbyImageData: any;
          };
          slug: string;
        };
      }>;
    };
  };
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ data }) => {
  return (
    <Layout>
      <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-2">
        {data.allContentfulPortfolio.edges.map((item, index) => {
          const { name, ThumbImg, slug } = item.node;
          const image = getImage(ThumbImg);
          const delay = `${index * 100}`;
          return (
            <div
              className={`flex flex-col border-2 border-black dark:shadow-light  duration-300 shadow-dark  col-span-1 rounded-lg dark:border-white justify-between `}
              key={name}
              data-sal="slide-up"
              data-sal-delay={delay}
              data-sal-duration="500"
              data-sal-easing="ease"
            >
              <div className="text-2xl p-4 border-b-2 border-black dark:border-white">
                {name && name.length > 0 && <h2>{name}</h2>}
              </div>
              <div className="overflow-hidden">
                {image && (
                  <Link to={`/portfolio/${slug}`}>
                    {" "}
                    <GatsbyImage
                      className="aspect-[16/9] hover:scale-110 transform duration-300"
                      image={image}
                      alt={name}
                    />{" "}
                  </Link>
                )}
              </div>
              <div className="border-t-2 border-black dark:border-white p-5 text-center">
                <Link to={`/portfolio/${slug}`}>
                  <button className="border-2  hover:shadow-[0] dark:hover:shadow-[0] shadow-dark text-black  dark:borer-white dark:shadow-light border-black dark:border-white hover:dark:text-white dark:text-white py-2 px-5 min-w-[33%] rounded-lg bg-teal-400 hover:bg-teal-200 dark:bg-amber-600 dark:hover:bg-amber-500 duration-200">
                    Check it out
                  </button>
                </Link>
              </div>
            </div>
          );
          index += 1;
        })}
      </div>
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
          ThumbImg {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default PortfolioPage;

export const Head: HeadFC = () => (
  <Seo title="Portfolio" description="dev jam studio portfolio" />
);
