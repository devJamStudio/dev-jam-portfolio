import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import type { HeadFC } from "gatsby";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
interface PortfolioPageProps {
  data: {
    contentfulPortfolio: {
      name: string;
      description: {
        raw: string;
      };
      websiteImage: {
        gatsbyImageData: any;
      };
      stack: string[];
    };
  };
}
interface HeadProps {
  data: {
    contentfulPortfolio: {
      name: string;
    };
  };
}
const PortfolioPage: React.FC<PortfolioPageProps> = ({ data }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node: any, children: any) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        );
      },
      [BLOCKS.HEADING_1]: (node: any, children: any) => {
        return <h1>{children}</h1>;
      },
    },
  };
  const { name, description, websiteImage, stack } = data?.contentfulPortfolio;
  //const image = getImage(ThumbImg);

  return (
    <Layout>
      <div className="flex flex-col xl:flex-row gap-8 ">
        <div
          className=" w-full xl:w-8/12 flex  aspect-video"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-duration="700"
          data-sal-easing="ease"
        >
          {websiteImage.gatsbyImageData && (
            <div className="w-full flex border-2  border-black rounded-lg shadow-dark dark:border-white dark:shadow-light ">
              <GatsbyImage
                className="w-full"
                image={websiteImage.gatsbyImageData}
                alt={name}
                objectPosition="0% 0%"
                objectFit="fill"
              />
            </div>
          )}
        </div>
        <div
          className="w-full   xl:w-4/12 flex border-2 border-black rounded-lg  dark:shadow-light  dark:border-white shadow-dark flex-col"
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-duration="700"
          data-sal-easing="ease"
        >
          <div className="shadow-dark p-4 border-b-2 border-black dark:border-white dark:shadow-light ">
            {name && name.length > 0 && (
              <h1 className="text-5xl mb-3  ">{name}</h1>
            )}
          </div>
          <div className="shadow-dark py-4 border-b-2 flex-[2] border-black px-4 dark:border-white dark:shadow-light">
            <h2 className="text-2xl mb-4">About: </h2>
            {description &&
              description.raw &&
              renderRichText(description, options)}
          </div>
          {stack && (
            <div className="stack px-4 py-4  mb-2 ">
              <h3 className="text-2xl mb-4">Stack: </h3>
              <ul className="grid grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 gap-2 mx-4">
                {stack.map((item) => (
                  <li className="mx-2">{item}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="button--wrapper  flex justify-center py-4">
            <a
              href="www.github.com/maisonm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 mb-2 hover:shadow-[0] dark:hover:shadow-[0] shadow-dark text-black  dark:borer-white dark:shadow-light border-black dark:border-white hover:dark:text-white dark:text-white py-2 px-5 min-w-[33%] rounded-lg bg-teal-400 hover:bg-teal-200 dark:bg-amber-600 dark:hover:bg-amber-500 duration-200">
                Check it out
              </button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PortfolioPageQuery($slug: String) {
    contentfulPortfolio(slug: { eq: $slug }) {
      name
      description {
        raw
      }
      logoImg {
        gatsbyImageData(layout: FIXED, placeholder: BLURRED)
      }
      websiteImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      stack
      url
    }
  }
`;

export const Head: HeadFC<HeadProps> = ({ data }) => {
  const { name } = data.contentfulPortfolio;
  return <Seo title={name} description={name} />;
};

export default PortfolioPage;
