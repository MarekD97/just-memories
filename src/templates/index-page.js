import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Album from "../components/Album";
import BackgroundImage from "../components/BackgroundImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  heading,
  subheading,
  align,
  headerImage,
  content,
  footerImage,
  cmsMode,
}) => {
  return (
    <div className="home">
      <Header
        image={getImage(headerImage) || headerImage}
        heading={heading}
        subheading={subheading}
        textAlign={align}
      />
      <main className="home__main">
        <section className="home__section">
          {!cmsMode && (
            <StaticImage
              className="watermark"
              style={{ left: 0 }}
              src="../img/eucalyptus_02.png"
              alt=""
              placeholder="blurred"
              layout="constrained"
              width={300}
              aspectRatio={1 / 1}
            />
          )}
          {typeof content === "object" ? (
            <div>{content}</div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          )}
        </section>
        {!cmsMode && <Album />}
        <BackgroundImage
          image={getImage(footerImage) || footerImage}
          height={480}
          imagePosition="center center"
        />
      </main>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  align: PropTypes.string,
  headerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  footerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  cmsMode: PropTypes.bool,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        align={frontmatter.align}
        headerImage={frontmatter.headerImage}
        content={data.markdownRemark.html}
        footerImage={frontmatter.footerImage}
        cmsMode={false}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        heading
        subheading
        align
        headerImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        footerImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
