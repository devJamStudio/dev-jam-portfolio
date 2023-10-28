import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
interface PortfolioPageProps {
  data: {
    mdx: {
      frontmatter: {
        slug: string;
        name: string;
        paragraph: string;
      };
    };
  };
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ data }) => {
  const { name, paragraph } = data.mdx.frontmatter;

  return (
    <Layout>
      <h1>{name}</h1>
      <p>{paragraph}</p>
    </Layout>
  );
};

export const query = graphql`
  query PortfolioPageQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        name
        paragraph
      }
    }
  }
`;

export default PortfolioPage;
