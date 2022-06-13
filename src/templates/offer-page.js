import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

//eslint-disable-next-line
export const OfferPageTemplate = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};

const OfferPage = ({ data }) => {
  const { html } = data.markdownRemark;
  return (
    <Layout>
      <OfferPageTemplate content={html} />
    </Layout>
  );
};

export default OfferPage;

export const pageQuery = graphql`
  query OfferPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      html
    }
  }
`;
