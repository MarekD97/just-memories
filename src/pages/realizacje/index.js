import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import AlbumCard from "../../components/AlbumCard";

const RealizationsIndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout>
      <div className="realizations">
        {posts.map(({ node: post }) => (
          <AlbumCard
            key={post.id}
            image={post.frontmatter.images[0]}
            heading={post.frontmatter.title}
            subheading={post.frontmatter.description}
            slug={post.fields.slug}
          />
        ))}
      </div>
    </Layout>
  );
};

RealizationsIndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.array,
    }),
  }),
};

export default RealizationsIndexPage;

export const pageQuery = graphql`
  query RealizationsIndexPageTemplate {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "realization-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD MMMM YYYY", locale: "pl")
            description
            images {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  height: 480
                  quality: 64
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`;
