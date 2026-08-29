import React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/layout";
import ContactForm from "../components/contactForm";
import Seo from "../components/seo";
import { useCopy } from "../i18n/LocaleContext";
import type { LocalePageContext } from "../i18n/copy";
import { copy as allCopy, defaultLocale } from "../i18n/copy";

const Contact: React.FC = () => {
  const copy = useCopy();

  return (
    <Layout>
      <div className="max-w-[700px] mx-auto">
        <div
          className="my-4"
        >
          <h1 className="text-6xl mb-6">{copy.contact.title}</h1>
          <span>{copy.contact.subtitle}</span>
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;

export const Head: HeadFC<object, LocalePageContext> = ({
  pageContext,
}) => {
  const locale = pageContext?.locale || defaultLocale;
  return (
    <Seo
      title={allCopy[locale].nav.contact}
      locale={locale}
      basePath={pageContext?.basePath}
    />
  );
};
