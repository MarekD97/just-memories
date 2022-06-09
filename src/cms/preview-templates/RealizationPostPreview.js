import React from "react";
import PropTypes from "prop-types";
import { RealizationPostTemplate } from "../../templates/realization-post";

const RealizationPostPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return (
      <RealizationPostTemplate
        title={data.title}
        description={data.description}
        date={data.date}
        images={data.images.map((image) => getAsset(image))}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

RealizationPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default RealizationPostPreview;
