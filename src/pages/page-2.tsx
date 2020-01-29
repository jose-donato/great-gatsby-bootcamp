import * as React from "react";
import Layout from "../layouts/index.tsx";
import Link from "gatsby-link";

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
