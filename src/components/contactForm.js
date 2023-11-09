import React, { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/6a0f4e30-78d1-11ee-924e-b76664806d50"; // TODO - update to the correct endpoint

const ContactForm = () => {
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
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
      <div
        className="pt-0 mb-6"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-duration="600"
        data-sal-easing="ease"
      >
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="focus:outline-none border-black border-2 shadow-dark rounded-lg bg-white dark:bg-black  dark:border-white dark:shadow-light  focus:ring relative w-full px-3 py-3 text-sm text-black dark:text-white  placeholder-gray-600  dark:placeholder-gray-300  outline-none"
          required
        />
      </div>
      <div
        className="pt-0 mb-6"
        data-sal="slide-left"
        data-sal-delay="600"
        data-sal-duration="600"
        data-sal-easing="ease"
      >
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm border-black border-2 shadow-dark rounded-lg bg-white dark:bg-black  dark:border-white dark:shadow-light  focus:ring relative w-full px-3 py-3 text-sm text-black dark:text-white  placeholder-gray-600  dark:placeholder-gray-300  outline-none"
          required
        />
      </div>
      <div
        className="pt-0 mb-6"
        data-sal="slide-left"
        data-sal-delay="900"
        data-sal-duration="600"
        data-sal-easing="ease"
      >
        <textarea
          placeholder="Your message"
          name="message"
          className="focus:outline-nonefocus:ring h-40 relative w-full px-3 py-3 text-sm border-black border-2 shadow-dark rounded-lg bg-white dark:bg-black  dark:border-white dark:shadow-light  focus:ring relative w-full px-3 py-3 text-sm text-black dark:text-white  placeholder-gray-600  dark:placeholder-gray-300 outline-none"
          required
        />
      </div>
      <div
        className="pt-0 mb-3 text-center"
        data-sal="slide-left"
        data-sal-delay="900"
        data-sal-duration="600"
        data-sal-easing="ease"
      >
        <button
          className="border-2 text-center  hover:shadow-[0] dark:hover:shadow-[0] shadow-dark text-black  dark:borer-white dark:shadow-light border-black dark:border-white hover:dark:text-white dark:text-white py-2 px-5 min-w-[33%] rounded-lg bg-teal-400 hover:bg-teal-200 dark:bg-amber-600 dark:hover:bg-amber-500 duration-200"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
