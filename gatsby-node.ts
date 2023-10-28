import { GatsbyNode } from "gatsby";
import { resolve } from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const allMdx: {
    errors?: any;
    data?: {
      allMdx: {
        nodes: {
          frontmatter: { slug?: string; name?: string; paragraph?: string };
        }[];
      };
    };
  } = await graphql(`
    query allMdxQuery {
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/portfolio/" } } }
      ) {
        nodes {
          frontmatter {
            slug
            name
            paragraph
          }
        }
      }
    }
  `);

  allMdx.data?.allMdx.nodes.forEach((node) => {
    const { slug, name, paragraph } = node.frontmatter;
    if (!slug) return; // Skip if no slug is defined

    // Type-safe `createPage` call.
    createPage({
      path: "/portfolio/" + slug,
      component: resolve("./src/templates/portfolio.tsx"),
      context: {
        slug,
        name,
        paragraph,
      },
    });
  });
};
