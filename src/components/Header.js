import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Header(props) {
  const {
    height = 740,
    image: img,
    title,
    subheading,
    imgPosition = "center 30%",
    textAlign,
  } = props;

  return (
    <React.Fragment>
      <header className="header">
        <div
          strength={-100}
          style={{
            gridArea: "1/1",
          }}
        >
          {img?.url ? (
            <img
              src={img}
              style={{
                gridArea: "1/1",
                // You can set a maximum height for the image, if you wish.
                height: height,
                width: "100%",
                objectFit: "cover",
                objectPosition: imgPosition,
              }}
              // You can optionally force an aspect ratio for the generated image
              aspectratio={3 / 1}
              // This is a presentational image, so the alt should be an empty string
              alt=""
              formats={["auto", "webp", "avif"]}
            />
          ) : (
            <GatsbyImage
              image={img}
              objectFit={"cover"}
              objectPosition={imgPosition}
              style={{
                gridArea: "1/1",
                // You can set a maximum height for the image, if you wish.
                maxHeight: height,
              }}
              layout="fullWidth"
              placeholder="none"
              // You can optionally force an aspect ratio for the generated image
              aspectratio={3 / 1}
              // This is a presentational image, so the alt should be an empty string
              alt=""
              formats={["auto", "webp", "avif"]}
            />
          )}
        </div>
        {(title || subheading) && (
          <div
            className="header__wrapper"
            style={{
              textAlign: textAlign,
              justifySelf: textAlign,
            }}
          >
            {title && (
              <h1 className="header__title">
                {title}
              </h1>
            )}
            {subheading && (
              <h2 className="header__subheading">
                {subheading}
              </h2>
            )}
          </div>
        )}
      </header>
    </React.Fragment>
  );
}

Header.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  textAlign: PropTypes.string,
  subheading: PropTypes.string,
  imgPosition: PropTypes.string,
};