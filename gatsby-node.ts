import { GatsbyNode } from "gatsby";
import { resolve } from "path";

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
            url
            websiteImage
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
      component: resolve("./src/templates/portfolio.tsx"),
      context: {
        slug: slug, // Pass the slug to the page query
        name,
        description,
        ThumbImg,
      },
    });
  });
};
