import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { copy, defaultLocale, locales, localePath } from "../i18n/copy";
import type { Locale } from "../i18n/copy";

interface SeoProps {
  title: string;
  description?: string;
  locale?: Locale;
  /** Unprefixed path, e.g. "/offer/". Used for hreflang alternates. */
  basePath?: string;
  children?: React.ReactNode;
}

const Seo: React.FC<SeoProps> = ({
  description,
  title,
  locale = defaultLocale,
  basePath,
  children,
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          author
          image
        }
      }
    }
  `);

  const { title: siteTitle, siteUrl, author, image } = data.site.siteMetadata;
  const metaDescription = description || copy[locale].seo.description;

  return (
    <>
      <html lang={locale} />
      <title>{siteTitle ? `${title} | ${siteTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale === "pl" ? "pl_PL" : "en_GB"} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author || ""} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {image && <meta property="og:image" content={image} />}
      {basePath &&
        locales.map((alt) => (
          <link
            key={alt}
            rel="alternate"
            hrefLang={alt}
            href={`${siteUrl}${localePath(basePath, alt)}`}
          />
        ))}
      {children}
    </>
  );
};

export default Seo;
