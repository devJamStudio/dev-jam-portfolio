import React, { useState } from "react";
import Button from "../components/button";
import { useCopy } from "../i18n/LocaleContext";
const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/6a0f4e30-78d1-11ee-924e-b76664806d50";

const ContactForm = () => {
  const copy = useCopy();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">{copy.contact.thanks}</div>
        <div className="text-md">{copy.contact.thanksBody}</div>
      </>
    );
  }

  return (
    <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
      <div
        className="pt-0 my-4"
      >
        <input
          type="text"
          placeholder={copy.contact.name}
          name="name"
          className="focus:outline-none border-black border-2 shadow-dark rounded-lg bg-white dark:bg-black  dark:border-white dark:shadow-light  focus:ring relative w-full px-3 py-3 text-sm text-black dark:text-white  placeholder-gray-600  dark:placeholder-gray-300  outline-none"
          required
        />
      </div>
      <div
        className="pt-0 my-4"
      >
        <input
          type="email"
          placeholder={copy.contact.email}
          name="email"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm border-black border-2 shadow-dark rounded-lg bg-white dark:bg-black  dark:border-white dark:shadow-light  focus:ring relative w-full px-3 py-3 text-sm text-black dark:text-white  placeholder-gray-600  dark:placeholder-gray-300  outline-none"
          required
        />
      </div>
      <div
        className="pt-0 mt-4"
      >
        <textarea
          placeholder={copy.contact.message}
          name="message"
          className="focus:outline-nonefocus:ring h-40 relative w-full px-3 py-3 text-sm border-black border-2 shadow-dark rounded-lg bg-white dark:bg-black  dark:border-white dark:shadow-light  focus:ring relative w-full px-3 py-3 text-sm text-black dark:text-white  placeholder-gray-600  dark:placeholder-gray-300 outline-none"
          required
        />
      </div>
      <div
        className="pt-0 text-center"
      >
        <Button type="submit">{copy.contact.send}</Button>{" "}
      </div>
    </form>
  );
};

export default ContactForm;
