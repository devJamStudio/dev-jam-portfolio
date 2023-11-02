import { GatsbyNode } from "gatsby";
import { resolve } from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  // Use a GraphQL fragment for ContentfulPortfolio to avoid redundant code
  const portfolioFragment = `
    fragment PortfolioFields on ContentfulPortfolio {
      slug
      name
      description {
        raw
      }
      ThumbImg {
        gatsbyImageData
      }
    }
  `;

  // Use the fragment in your query
  const allContentfulData = await graphql(`
    query allContentfulDataQuery {
      allContentfulPortfolio {
        edges {
          node {
            ...PortfolioFields
          }
        }
      }
    }
    ${portfolioFragment} // Include the fragment
  `);

  if (allContentfulData.errors) {
    console.error("Error fetching Contentful data:", allContentfulData.errors);
    return;
  }

  allContentfulData.data.allContentfulPortfolio.edges.forEach((edge) => {
    const { slug, name, description, ThumbImg } = edge.node;
    if (!name) return; // Skip if no name is defined

    createPage({
      path: `/portfolio/${slug}`,
      component: resolve("./src/templates/portfolio.tsx"),
      context: {
        slug,
        name,
        description,
        ThumbImg,
      },
    });
  });
};
