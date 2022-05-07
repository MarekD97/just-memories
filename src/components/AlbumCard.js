import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const AlbumCard = ({ image, heading, subheading, slug }) => (
  <Link className="album-card" to={slug}>
    <GatsbyImage
      imgClassName="album-card__image"
      image={getImage(image) || image}
      width={400}
      objectFit={"cover"}
      aspectratio={1 / 1}
      layout="fullWidth"
      alt=""
    />
    <span className="album-card__link">
      <h2 className="album-card__h2">{heading}</h2>
      <h3 className="album-card__h3">{subheading}</h3>
    </span>
  </Link>
);

export default AlbumCard;
