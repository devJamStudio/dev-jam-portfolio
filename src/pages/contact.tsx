import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ConfactForm from "../components/contactForm";
// Define the interface for the component's props
interface ContactProps {
  data: string;
}
const data = "Hello World";
// Define the Contact component
const Contact: React.FC<ContactProps> = () => {
  return (
    <Layout>
      <div className="max-w-[700px] mx-auto">
        <div
          className="my-4"
          data-sal="slide-left"
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease"
        >
          <h1 className="text-6xl mb-6">Contact Me</h1>
          <span>I speak english & polish</span>
        </div>
        <ConfactForm />
      </div>
    </Layout>
  );
};

export default Contact;
