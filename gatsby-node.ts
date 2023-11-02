import type { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;
    createTypes(`
    type ContentfulAsset implements Node {
      gatsbyImageData: JSON
    }
  `);
  };

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const allContentfulData: {
    errors?: any;
    data?: {
      allContentfulPortfolio: {
        edges: {
          node: {
            slug: string;
            name: string;
            description: {
              raw: string;
            };
            ThumbImg: {
              gatsbyImageData: any;
            };
          };
        }[];
      };
    };
  } = await graphql(`
    query allContentfulDataQuery {
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
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  allContentfulData.data?.allContentfulPortfolio.edges.forEach((edge) => {
    const { name, description, ThumbImg, slug } = edge.node;
    if (!slug) return; // Skip if no name is defined

    // Type-safe `createPage` call.
    createPage({
      path: "/portfolio/" + slug,
      component: require.resolve("./src/templates/portfolio.tsx"),
      context: {
        slug: slug, // Pass the slug to the page query
        name,
        description,
        ThumbImg,
      },
    });
  });
};

export default { createSchemaCustomization, createPages };
