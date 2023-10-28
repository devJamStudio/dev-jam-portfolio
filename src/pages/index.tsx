import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/header";
const IndexPage: React.FC<PageProps> = () => {
  function add(a: number, b: number) {
    return a + b;
  }
  return (
    <main>
      <Header title="dev jam studio" />
      <h1>{add(3, 3)}</h1>
    </main>
  );
};

export default IndexPage;
