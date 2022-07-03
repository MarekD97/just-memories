import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";

//eslint-disable-next-line
export const IndexOfferPageTemplate = ({ offers }) => {
  return (
    <div className="container">
      {offers.map(({ node: offer }) => (
        <Link to={offer.fields.slug} className="navbar-menu__item">
          {offer.frontmatter.title}
          <br />
        </Link>
      ))}
    </div>
  );
};

const OfferPage = ({ data }) => {
  const { edges: offers } = data.allMarkdownRemark;
  return (
    <Layout>
      <IndexOfferPageTemplate offers={offers} />
    </Layout>
  );
};

export default OfferPage;

export const pageQuery = graphql`
  query IndexOfferPageTemplate {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "offer-page" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
