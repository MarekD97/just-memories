import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Markdown from "markdown-to-jsx";

//eslint-disable-next-line
export const OfferPageTemplate = ({ offers }) => {
  const [activeOffer, setActiveOffer] = React.useState(0);

  return (
    <>
      <div className="offer">
        {offers.map((offer, index) => (
          <button
            onClick={() => setActiveOffer(index)}
            className={`button ${
              index === activeOffer ? "button--primary" : ""
            }`}
            style={{ margin: "0 1em" }}
          >
            {offer.heading}
          </button>
        ))}
      </div>
      <div className="offer">
        <div className="offer__card">
          <h1 className="offer__heading">{offers[activeOffer].heading}</h1>
          <h2 className="offer__subheading">
            {offers[activeOffer].subheading}
          </h2>
          <Markdown className="offer__content">
            {offers[activeOffer].content}
          </Markdown>
          {/* <p className="offer__price">Koszt: {offers[activeOffer].price} zł</p> */}
        </div>
      </div>
    </>
  );

  // return (
  //   <div className="offer">
  //     {offers.map((offer, index) => (
  //       <div className="offer__card" key={index}>
  //         <h1 className="offer__heading">{offer.heading}</h1>
  //         <h2 className="offer__subheading">{offer.subheading}</h2>
  //         <Markdown className="offer__content">{offer.content}</Markdown>
  //         <p className="offer__price">Koszt: {offer.price} zł</p>
  //       </div>
  //     ))}
  //   </div>
  // );
};

const OfferPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <OfferPageTemplate offers={frontmatter.offers} />
    </Layout>
  );
};

export default OfferPage;

export const pageQuery = graphql`
  query OfferPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "offer-page" } }) {
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
