import { navigate } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";

const Success = () => {
  const styleDiv = {
    padding: "0 3.75em",
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };
  return (
    <Layout>
      <div style={styleDiv}>
        <h1 style={{ fontSize: "1.5rem" }}>Wiadomość została wysłana.</h1>
        <button
          className="button button--primary"
          style={{ width: "auto" }}
          onClick={() => navigate("/")}
        >
          Powrót na stronę główną
        </button>
      </div>
    </Layout>
  );
};

export default Success;
