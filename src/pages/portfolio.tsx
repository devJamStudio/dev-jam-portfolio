import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Seo from "../components/seo";
import type { HeadFC } from "gatsby";
import Button from "../components/button";
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
  return (
    <Layout>
      <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-3 2xl:grid-cols-4">
        {data.allContentfulPortfolio.edges.map((item, index) => {
          const { name, logoImg, slug } = item.node;
          const image = getImage(logoImg);
          const delay = `${index * 100}`;
          return (
            <div
              className={`flex flex-col  border-2 border-black dark:shadow-light  duration-300 shadow-dark  col-span-1 rounded-lg dark:border-white justify-between `}
              key={name}
              data-sal="slide-up"
              data-sal-delay={delay}
              data-sal-duration="500"
              data-sal-easing="ease"
            >
              <div className="text-2xl px-4 py-6 border-b-2 border-black   dark:border-white">
                {name && name.length > 0 && <h2>{name}</h2>}
              </div>
              <div className="flex items-center justify-center py-8  bg-white h-full">
                {image && (
                  <Link to={`/portfolio/${slug}`}>
                    {" "}
                    <GatsbyImage
                      className=" hover:scale-110  transform duration-300 "
                      image={image}
                      alt={name}
                      objectFit="contain"
                    />{" "}
                  </Link>
                )}
              </div>
              <div className="border-t-2 border-black dark:border-white mb-2 text-center">
                <Link to={`/portfolio/${slug}`}>
                  <Button type="button"> Check it out</Button>
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
          logoImg {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
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
