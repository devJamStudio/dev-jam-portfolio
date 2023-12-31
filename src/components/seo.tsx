/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface SeoProps {
  description?: string;
  title: string;
  children?: React.ReactNode;
}

const Seo: React.FC<SeoProps> = ({ description, title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
        }
      }
    }
  `);

  const siteMetadata = data.site.siteMetadata;
  const metaDescription = description || siteMetadata.description;
  const defaultTitle = siteMetadata.title;
  const image = siteMetadata.image;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.author || ""} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="og:image" content={image} />
      {children}
    </>
  );
};

export default Seo;
