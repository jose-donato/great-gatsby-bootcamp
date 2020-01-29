import * as React from "react";

import "./index.css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const Layout = (props: any) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div
        style={{
          padding: "0px 1.0875rem 1.45rem",
          flexGrow: 1
        }}
      >
        {props.children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
