import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../sass/main.scss";
import useSiteMetadata from "./SiteMetadata";

import appleTouchIcon from "../img/apple-touch-icon.png";
import favicon16 from "../img/favicon-16x16.png";
import favicon32 from "../img/favicon-32x32.png";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <div style={containerStyle}>
      <Helmet>
        <html lang="pl" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
        <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />

        {/* <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        /> */}
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        {/* <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        /> */}
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
