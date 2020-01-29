import * as React from "react";
interface Props {}

import { graphql, useStaticQuery } from "gatsby";
const gql = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export const Footer: React.FC<Props> = () => {
  const data = useStaticQuery(gql);
  return (
    <footer>
      <p>
        Created by {data.site.siteMetadata.author}, © {new Date().getFullYear()}
      </p>
    </footer>
  );
};
