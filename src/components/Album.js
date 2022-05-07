import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link, navigate, StaticQuery } from "gatsby";

const AlbumTemplate = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  const posts = edges.map(({ node: post }) => {
    const image = post.frontmatter.images[0];
    return {
      image: getImage(image) || image,
      slug: post.fields.slug,
      id: post.id,
    };
  });

  return (
    <div className="album">
      <h1 className="album__header">Realizacje</h1>
      <div className="album__row">
        {posts.map((post) => (
          <Link to={post.slug} key={post.id}>
            <GatsbyImage
              className="album__image"
              image={post.image}
              objectFit={"cover"}
              width={640}
              loading="lazy"
              layout="constrained"
              alt=""
              formats={["auto", "webp", "avif"]}
            />
          </Link>
        ))}
      </div>
      <button
        className="button button--primary"
        onClick={() => navigate("/realizacje/")}
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
          limit: 5
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                images {
                  childImageSharp {
                    gatsbyImageData(
                      width: 640
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
