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
      <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3">
        {data.allContentfulPortfolio.edges.map((item, index) => {
          const { name, ThumbImg, slug } = item.node;
          const image = getImage(ThumbImg);
          const delay = `${index * 100}`;
          return (
            <div
              className="flex flex-col border-2 border-black dark:shadow-lg shadow-lg dark:shadow-white/10 shadow-black/20 rounded-md dark:border-white justify-between"
              key={name}
              data-sal="slide-up"
              data-sal-delay={delay}
              data-sal-duration="500"
              data-sal-easing="ease"
            >
              <div className="text-2xl p-2 border-b-2 border-black dark:border-white">
                {name && name.length > 0 && <h2>{name}</h2>}
              </div>

              {image && (
                <Link to={`/portfolio/${slug}`}>
                  {" "}
                  <GatsbyImage
                    className="aspect-[16/9]"
                    image={image}
                    alt={name}
                  />{" "}
                </Link>
              )}
              <div className="border-t-2 border-black dark:border-white p-3 text-center">
                <Link to={`/portfolio/${slug}`}>
                  <button className="bg-black text-white  dark:bg-white dark:text-black py-2 px-5 min-w-[30%] rounded-md ">
                    See
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
