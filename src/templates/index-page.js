import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Album from "../components/Album";
import BackgroundImage from "../components/BackgroundImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({ intro, main, footerImage }) => {
  return (
    <div className="home">
      <Header
        image={getImage(intro.image) || intro.image}
        title={intro.heading}
        subheading={intro.subheading}
        textAlign={intro.align}
      />
      <main className="home__main">
        <section className="home__section">
          <StaticImage
            className="home__watermark"
            src="../img/eucalyptus_02.png"
            alt=""
            placeholder="blurred"
            layout="constrained"
            width={300}
            height={300}
            aspectRatio={1 / 1}
          />
          <h3>{main.heading}</h3>
          <p>{main.description}</p>
        </section>
        <Album />
        <BackgroundImage
          image={getImage(footerImage) || footerImage}
          height={480}
          imagePosition="center center"
        >
          XYZ
        </BackgroundImage>
      </main>
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
