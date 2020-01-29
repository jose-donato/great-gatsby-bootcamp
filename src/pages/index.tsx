import * as React from "react";
import Layout from "../layouts/index.tsx";
import Link from "gatsby-link";

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>
        I'm José, a cyber security masters' student and full-stack developer.
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>.
      </p>
    </Layout>
  );
};

export default IndexPage;
