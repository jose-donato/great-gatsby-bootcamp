import * as React from "react";
import Link from "gatsby-link";

import Layout from "../layouts/index.tsx";
interface Props {}

const About: React.FC<Props> = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>Computer Science bachelor and student of cyber security</p>
      <p>
        Any doubts? <Link to="/contact">Contact me</Link>.
      </p>
    </Layout>
  );
};

export default About;
