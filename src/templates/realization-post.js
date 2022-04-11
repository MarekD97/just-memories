import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

const RealizationPost = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);
  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
        <p>{Date(frontmatter.date).substring()}</p>
        {frontmatter.images.map((image, index) => (
          <GatsbyImage key={index} image={getImage(image) || image} alt="" />
        ))}
      </div>
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
        date(formatString: "MMMM DD, YYYY")
        images {
          childImageSharp {
            gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
