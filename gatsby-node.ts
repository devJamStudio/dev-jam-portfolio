import { GatsbyNode } from "gatsby";
import { resolve } from "path";
import { defaultLocale, locales, localePath } from "./src/i18n/copy";

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
            logoImg {
              gatsbyImageData(layout: FIXED, placeholder: BLURRED)
            }
            url
            description {
              raw
            }
            websiteImage {
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

    // onCreatePage below does not fire for pages a plugin creates itself, so
    // these get both locales here.
    const basePath = `/portfolio/${slug}/`;

    locales.forEach((locale) => {
      createPage({
        path: localePath(basePath, locale),
        component: resolve("./src/templates/portfolio.tsx"),
        context: {
          slug: slug, // Pass the slug to the page query
          name,
          description,
          ThumbImg,
          locale,
          basePath,
        },
      });
    });
  });
};

/**
 * Mirrors every page under /pl/. Pages read `pageContext.locale`; the guard on
 * an already-set locale is what stops the mirrored page from re-triggering this.
 */
export const onCreatePage: GatsbyNode["onCreatePage"] = async ({
  page,
  actions,
}) => {
  if (page.context?.locale) return;

  const { createPage, deletePage } = actions;
  deletePage(page);
  createPage({
    ...page,
    context: { ...page.context, locale: defaultLocale, basePath: page.path },
  });

  locales
    .filter((locale) => locale !== defaultLocale)
    .forEach((locale) => {
      createPage({
        ...page,
        path: localePath(page.path, locale),
        context: { ...page.context, locale, basePath: page.path },
      });
    });
};
