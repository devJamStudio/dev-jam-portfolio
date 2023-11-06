import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/header";
import Seo from "../components/seo";
import Layout from "../components/layout";
import Typewriter from "typewriter-effect";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className=" text-[3rem] mt-10 leading-tightfont-ocr text-black dark:text-white md:text-[5rem] md:text-[7rem] xl:text-[8rem] mr-10">
        <Typewriter
          options={{
            strings: [
              "Are You ready to JAM?",
              "Web Development",
              "WordPress",
              "WooCommerce",
              "Shopify",
              "GatsbyJS",
            ],
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(2000)
              .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <Seo title="Home" description="dev jam studio" />
);
