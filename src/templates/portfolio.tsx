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
      ThumbImg: {
        gatsbyImageData: any;
      };
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
  const { name, description, ThumbImg, stack } = data?.contentfulPortfolio;
  const image = getImage(ThumbImg);

  return (
    <Layout>
      {name && name.length > 0 && <h1 className="text-5xl mb-3">{name}</h1>}
      {image && <GatsbyImage image={image} alt={name} />}
      {description && description.raw && renderRichText(description, options)}
      {stack && (
        <div className="stack py-4">
          <h3 className="text-2xl">Stack: </h3>
          <ul>
            {stack.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </Layout>
  );
};

export const query = graphql`
  query PortfolioPageQuery {
    contentfulPortfolio {
      name
      description {
        raw
      }
      ThumbImg {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      stack
    }
  }
`;

export const Head: HeadFC<HeadProps> = ({ data }) => {
  const { name } = data.contentfulPortfolio;
  return <Seo title={name} description={name} />;
};

export default PortfolioPage;
