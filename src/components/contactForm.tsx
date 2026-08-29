import React, { useState } from "react";
import Button from "../components/button";
import { useCopy } from "../i18n/LocaleContext";

const FORM_NAME = "contact";

// Netlify detects the form by parsing the deployed HTML at build time, so the
// markup below has to ship in the SSR output — not be created by JS on mount.
// Submissions land in the Netlify UI; wire an email notification there.
const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const ContactForm: React.FC = () => {
  const copy = useCopy();
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFailed(false);

    const form = e.currentTarget;
    const data: Record<string, string> = { "form-name": FORM_NAME };
    for (const element of Array.from(form.elements)) {
      const input = element as HTMLInputElement | HTMLTextAreaElement;
      if (input.name) data[input.name] = input.value;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Form responded ${response.status}`);
        setSubmitted(true);
      })
      .catch(() => setFailed(true));
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">{copy.contact.thanks}</div>
        <div className="text-md">{copy.contact.thanksBody}</div>
      </>
    );
  }

  const field =
    "focus:outline-none border-black border-2 shadow-dark rounded-lg bg-white dark:bg-black dark:border-white dark:shadow-light focus:ring relative w-full px-3 py-3 text-sm text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-300 outline-none";

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* Required for the JS-intercepted POST to be attributed to this form. */}
      <input type="hidden" name="form-name" value={FORM_NAME} />

      {/* Honeypot: hidden from people, irresistible to bots. */}
      <p className="hidden">
        <label>
          {copy.contact.honeypot}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="pt-0 my-4">
        <label className="sr-only" htmlFor="contact-name">
          {copy.contact.name}
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder={copy.contact.name}
          name="name"
          className={field}
          required
        />
      </div>

      <div className="pt-0 my-4">
        <label className="sr-only" htmlFor="contact-email">
          {copy.contact.email}
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder={copy.contact.email}
          name="email"
          className={field}
          required
        />
      </div>

      <div className="pt-0 mt-4">
        <label className="sr-only" htmlFor="contact-message">
          {copy.contact.message}
        </label>
        <textarea
          id="contact-message"
          placeholder={copy.contact.message}
          name="message"
          className={`${field} h-40`}
          required
        />
      </div>

      {failed && (
        <p className="pt-4 text-center">{copy.contact.failed}</p>
      )}

      <div className="pt-0 text-center">
        <Button type="submit">{copy.contact.send}</Button>
      </div>
    </form>
  );
};

export default ContactForm;
