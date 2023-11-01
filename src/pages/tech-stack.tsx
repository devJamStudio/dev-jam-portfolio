import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";

// Define the interface for the component's props
interface TechStackProps {
  data: {
    allContentfulStack: {
      nodes: {
        name: string;
        stack: {
          gatsbyImageData: any;
        }[];
      }[];
    };
  };
}

const TechStack: React.FC<TechStackProps> = ({ data }) => {
  const stack = data.allContentfulStack.nodes || [];

  return (
    <Layout>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 2xl:grid-cols-5">
        {stack.map((tech) => (
          <div key={tech.name}>
            {tech.stack.map((item, index) => (
              <div
                key={index}
                className="border-2 border-black dark:shadow-lg shadow-lg dark:shadow-white/10 shadow-black/20 rounded-md dark:border-white"
              >
                <div className="p-4">
                  <h3>{tech.name}</h3>
                </div>

                <GatsbyImage image={item.gatsbyImageData} alt={tech.name} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulStack {
      nodes {
        name
        stack {
          gatsbyImageData
        }
      }
    }
  }
`;

export default TechStack;
