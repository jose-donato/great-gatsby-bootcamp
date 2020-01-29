import * as React from "react";
import Layout from "../layouts/index.tsx";
interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>You can email me zmcdonato@gmail.com</p>
      <p>
        Or message me on{" "}
        <a target="__blank" href="https://twitter.com/whynot1__">
          twitter
        </a>
        .
      </p>
    </Layout>
  );
};

export default Contact;
