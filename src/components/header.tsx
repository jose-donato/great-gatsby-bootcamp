import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import * as headerStyles from "./header.module.css";
interface Props {}

const gql = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export const Header: React.FC<Props> = () => {
  const data = useStaticQuery(gql);
  return (
    <header
      style={{
        background: "rebeccapurple",
        marginBottom: "1.45rem"
      }}
    >
      <Helmet
        title="Personal Site"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />

      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0.45rem 0.5875rem"
        }}
      >
        {/*<h1>
          <Link to="/" className={headerStyles.title}>
            {data.site.siteMetadata.author}
          </Link>
		</h1>*/}
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link
                to="/"
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                <strong>{data.site.siteMetadata.author}</strong>
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
