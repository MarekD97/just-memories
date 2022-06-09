import React from "react";
import PropTypes from "prop-types";

import BackgroundImage from "./BackgroundImage";

export default function Header(props) {
  const {
    height = 740,
    image: img,
    heading,
    subheading,
    imgPosition = "center 30%",
    textAlign,
  } = props;

  return (
    <React.Fragment>
      <header className="header">
        <BackgroundImage
          image={img}
          height={height}
          imagePosition={imgPosition}
        >
          {heading && subheading && (
            <div
              className="header__wrapper"
              style={{
                textAlign: textAlign,
                justifySelf: textAlign,
              }}
            >
              <h1 className="header__title">{heading}</h1>
              <h2 className="header__subheading">{subheading}</h2>
            </div>
          )}
        </BackgroundImage>
      </header>
    </React.Fragment>
  );
}

Header.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  height: PropTypes.number,
  textAlign: PropTypes.string,
  subheading: PropTypes.string,
  imgPosition: PropTypes.string,
};
