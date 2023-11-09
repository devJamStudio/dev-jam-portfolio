import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
interface SiteMetadata {
  title: string;
  siteUrl: string;
  author: string;
  image: string;
  pages: {
    title: string;
    slug: string;
  }[];
}
const config: GatsbyConfig = {
  siteMetadata: {
    title: `devJam Studio`,
    siteUrl: `https://devjam.studio`,
    author: `@devjamstudio`,
    image: "",
    pages: [
      {
        title: "Home",
        slug: "/",
      },
      {
        title: "Portfolio",
        slug: "/portfolio",
      },
      {
        title: "About",
        slug: "/about",
      },
      {
        title: "Contact",
        slug: "/contact",
      },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-image`,
      options: {
        formats: ["auto", "webp"], // Remove "avif"
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-postcss`,
    `gatsby-plugin-scroll-reveal-with-new-react`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

export default config;
