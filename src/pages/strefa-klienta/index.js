import React from "react";
import Layout from "../../components/Layout";

const CustomerZoneIndexPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    console.table(Object.fromEntries(form));
  };
  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userId">
            <input type="text" name="userId" id="userId" />
          </label>
          <label htmlFor="password">
            <input type="password" name="password" id="password" />
          </label>
          <input type="submit" value="Zaloguj" />
        </form>
      </div>
    </Layout>
  );
};

export default CustomerZoneIndexPage;
