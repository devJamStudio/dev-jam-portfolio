import { GatsbyNode } from "gatsby";
import { resolve } from "path";
import { defaultLocale, locales, localePath } from "./src/i18n/copy";
import { projects } from "./src/data/portfolio";

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;

  // onCreatePage below does not fire for pages a plugin creates itself, so
  // these get both locales here.
  projects.forEach((project) => {
    const basePath = `/portfolio/${project.slug}/`;

    locales.forEach((locale) => {
      createPage({
        path: localePath(basePath, locale),
        component: resolve("./src/templates/portfolio.tsx"),
        context: { slug: project.slug, locale, basePath },
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
