import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
// Define the interface for the component's props
interface AboutProps {
  data: string;
}
const data = "Hello World";
// Define the About component
const About: React.FC<AboutProps> = ( ) => {
  return <Layout > {data}</Layout>;
};

export default About;
