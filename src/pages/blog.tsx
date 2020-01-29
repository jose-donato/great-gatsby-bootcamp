import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../layouts/index.tsx";
interface Props {}

const gql = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          id
          html
          excerpt
        }
      }
    }
  }
`;
const Blog: React.FC<Props> = () => {
  const data = useStaticQuery(gql);
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge: any) => (
          <li key={edge.node.id}>
            <h2>{edge.node.frontmatter.title}</h2>
            <p>{edge.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default Blog;
