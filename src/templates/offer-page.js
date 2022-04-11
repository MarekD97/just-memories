import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

//eslint-disable-next-line
export const OfferPageTemplate = ({ offers }) => {
  return (
    <div>
      {offers.map((offer, index) => (
        <div key={index}>
          <h1>{offer.heading}</h1>
          <h2>{offer.subheading}</h2>
          {/* <div dangerouslySetInnerHTML={{ __html: offer.content }} /> */}
          <p>{offer.price}</p>
        </div>
      ))}
    </div>
  );
};

const OfferPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(data.markdownRemark);
  return (
    <Layout>
      <OfferPageTemplate offers={frontmatter.offers} />
    </Layout>
  );
};

export default OfferPage;

export const pageQuery = graphql`
  query OfferPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        offers {
          heading
          subheading
          content
          price
        }
      }
    }
  }
`;
