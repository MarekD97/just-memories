import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";

//eslint-disable-next-line
export const IndexOfferPageTemplate = ({ offers }) => {
  return (
    <div className="offer">
      {offers.map(({ node: offer }) => (
        <Link to={offer.fields.slug}>
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
