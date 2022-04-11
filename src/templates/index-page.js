import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Header from "../components/Header";
import { GatsbyImage } from "gatsby-plugin-image";
import Album from "../components/Album";

// eslint-disable-next-line
export const IndexPageTemplate = ({ intro, main, footerImage }) => {
  const heroImage = getImage(intro.image) || intro.image;
  footerImage = getImage(footerImage) || footerImage;

  return (
    <div className="home">
      <Header
        image={heroImage}
        title={intro.heading}
        subheading={intro.subheading}
        textAlign={intro.align}
      />
      <section className="" style={{ position: "relative" }}>
        <StaticImage
          src="../img/eucalyptus_02.png"
          alt=""
          placeholder="blurred"
          layout="constrained"
          width={600}
          height={600}
          aspectRatio={1 / 1}
          style={{
            position: "absolute",
            left: 0,
            width: "31.25vw",
          }}
        />
        <div strength={-100} className="header__content">
          <h2 style={{ zIndex: 10 }}>{main.heading}</h2>
          <h3 style={{ zIndex: 10 }}>{main.description}</h3>
        </div>
        <Album />
        <div
          style={{
            width: "100%",
            height: "50vh",
          }}
        >
          {footerImage?.url ? (
            <img
              src={footerImage}
              style={{
                gridArea: "1/1",
                // You can set a maximum height for the image, if you wish.
                height: "50vh",
                width: "100%",
                objectFit: "cover",
              }}
              // You can optionally force an aspect ratio for the generated image
              aspectratio={3 / 1}
              // This is a presentational image, so the alt should be an empty string
              alt=""
              formats={["auto", "webp", "avif"]}
            />
          ) : (
            <GatsbyImage
              image={footerImage}
              objectFit={"cover"}
              style={{
                gridArea: "1/1",
                // You can set a maximum height for the image, if you wish.
                height: "50vh",
              }}
              layout="fixed"
              // You can optionally force an aspect ratio for the generated image
              aspectratio={1 / 1}
              // This is a presentational image, so the alt should be an empty string
              alt=""
              formats={["auto", "webp", "avif"]}
            />
          )}
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  intro: PropTypes.shape({
    heading: PropTypes.string,
    subheading: PropTypes.string,
    align: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        alt: PropTypes.string,
      })
    ),
  }),
  footerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        intro={frontmatter.intro}
        main={frontmatter.main}
        footerImage={frontmatter.footerImage}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        intro {
          heading
          subheading
          align
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
        main {
          heading
          description
          images {
            image {
              childImageSharp {
                gatsbyImageData(width: 640, quality: 100, layout: CONSTRAINED)
              }
            }
            alt
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
