import type { GatsbyConfig } from "gatsby";
interface SiteMetadata {
  title: string;
  description: string;
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
    description: `devJam Studio — DevOps, AI and automation. CI/CD pipelines, infrastructure as code, AI agents, and the web builds that sit on top of them.`,
    siteUrl: `https://devjamstudio.netlify.app`,
    author: `@devjamstudio`,
    image: "/og-image.jpg",
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
