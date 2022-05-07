import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

//eslint-disable-next-line
export const RealizationPostTemplate = ({
  title,
  description,
  date,
  images,
}) => {
  return (
    <div className="realization-post">
      <div className="realization-post__header">
        <h1 className="realization-post__title">{title}</h1>
        <p className="realization-post__description">{description}</p>
      </div>
      <div className="realization-post__gallery">
        {images.map((image, index) => (
          <GatsbyImage
            key={index}
            className="realization-post__image"
            image={getImage(image) || image}
            height={360}
            layout="constrained"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

const RealizationPost = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <RealizationPostTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        date={frontmatter.date}
        images={frontmatter.images}
      />
    </Layout>
  );
};

export default RealizationPost;

export const pageQuery = graphql`
  query RealizationPostByID($id: String!) {
    markdownRemark(id: { eq: $id }, fields: { slug: {} }) {
      frontmatter {
        title
        description
        date(formatString: "DD MMMM YYYY", locale: "pl")
        images {
          childImageSharp {
            gatsbyImageData(height: 360, quality: 100, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
