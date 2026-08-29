import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { copy, defaultLocale, locales, localePath } from "../i18n/copy";
import type { Locale } from "../i18n/copy";

interface SeoProps {
  title: string;
  description?: string;
  locale?: Locale;
  /** Unprefixed path, e.g. "/offer/". Drives canonical and hreflang. */
  basePath?: string;
  children?: React.ReactNode;
}

const OG_LOCALE: Record<Locale, string> = { en: "en_GB", pl: "pl_PL" };

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
  const canonical = basePath
    ? `${siteUrl}${localePath(basePath, locale)}`
    : undefined;
  const ogImage = image ? `${siteUrl}${image}` : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteTitle,
    url: siteUrl,
    description: metaDescription,
    areaServed: "Worldwide",
    knowsLanguage: ["en", "pl"],
    ...(ogImage ? { image: ogImage } : {}),
    serviceType: [
      "DevOps",
      "CI/CD",
      "Infrastructure as code",
      "AI automation",
      "Web development",
      "E-commerce development",
    ],
  };

  return (
    <>
      <html lang={locale} />
      <title>{siteTitle ? `${title} | ${siteTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content={OG_LOCALE[locale]} />
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta
        name="twitter:card"
        content={ogImage ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:creator" content={author || ""} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {basePath &&
        locales.map((alt) => (
          <link
            key={alt}
            rel="alternate"
            hrefLang={alt}
            href={`${siteUrl}${localePath(basePath, alt)}`}
          />
        ))}
      {basePath && (
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${siteUrl}${localePath(basePath, defaultLocale)}`}
        />
      )}

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      {children}
    </>
  );
};

export default Seo;
