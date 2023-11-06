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
      <ConfactForm />
      </div>
    </Layout>
  );
};

export default Contact;
