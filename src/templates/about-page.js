import React from "react";
import PropTypes from 'prop-types';
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout"

export const AboutPageTemplate = ({ 
    heading,
    content,
    image
 }) => {
    image = getImage(image) || image;
    return (
        <div className="about">
            <div className="about__column">
            {image?.url ? (
                <img
                    className="about__image"
                    src={image}
                    style={{
                        objectFit: 'contain',
                        width: '100%',
                        maxHeight: '720px'
                    }}
                    alt=""
                    formats={["auto", "webp", "avif"]}
                />
            ) : (
                <GatsbyImage
                    className="about__image"
                    image={image}
                    objectFit={"cover"}
                    layout="constrained"
                    placeholder="dominantColor"
                    loading="lazy"
                    alt=""
                    formats={["auto", "webp", "avif"]}
                />
            )}
            </div>
            <div className="about__column">
                <h2 className="about__h2">{heading}</h2>
                <h3 className="about__h3">{content}</h3>
            </div>
        </div>
    )
}

AboutPageTemplate.propTypes = {
    heading: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const AboutPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <AboutPageTemplate
                heading={frontmatter.heading}
                content={frontmatter.content}
                image={frontmatter.image}
            />
        </Layout>
    );
};

AboutPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        })
    }) 
}

export default AboutPage;

export const pageQuery = graphql`
    query AboutPageTemplate {
        markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}) {
            frontmatter {
                heading
                content
                image {
                    childImageSharp {
                        gatsbyImageData(quality: 100, height: 720, layout: CONSTRAINED)
                    }
                }
            }
        }
  }
`