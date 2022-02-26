import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Parallax } from 'react-parallax';

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
        <Parallax
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
              // You can optionally force an aspect ratio for the generated image
              aspectratio={3 / 1}
              // This is a presentational image, so the alt should be an empty string
              alt=""
              formats={["auto", "webp", "avif"]}
            />
          )}
        </Parallax>
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
        <Parallax
          strength={-100}
          className="header__content"
        >
          <h2>
            Just memories
          </h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h3>
        </Parallax>
      </header>
    </React.Fragment>
  );
}

Header.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  textAlign: PropTypes.object,
  subheading: PropTypes.string,
  imgPosition: PropTypes.string,
};