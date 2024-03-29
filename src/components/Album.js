import React from "react";
import PropTypes from "prop-types";
import { getImage } from "gatsby-plugin-image";
import { graphql, navigate, StaticQuery } from "gatsby";
import AlbumCard from "./AlbumCard";

const AlbumTemplate = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  const posts = edges.map(({ node: post }) => {
    const image = post.frontmatter.images[0];
    return {
      image: getImage(image) || image,
      slug: post.fields.slug,
      title: post.frontmatter.title,
      id: post.id,
    };
  });

  return (
    <div className="album">
      <h3 className="album__header">Realizacje</h3>
      <div className="album__content">
        {posts.map((post) => (
          <AlbumCard
            key={post.id}
            image={post.image}
            heading={post.title}
            slug={post.slug}
          />
        ))}
      </div>
      <button
        className="button button--primary"
        onClick={() => navigate("/realizacje/")}
        style={{ alignSelf: "center" }}
      >
        Więcej
      </button>
    </div>
  );
};

AlbumTemplate.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.object,
    })
  ),
};

const Album = () => (
  <StaticQuery
    query={graphql`
      query AlbumTemplate {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "realization-post" } } }
          limit: 3
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
    `}
    render={(data, count) => <AlbumTemplate data={data} count={count} />}
  />
);

export default Album;
