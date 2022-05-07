import React from "react";
import PropTypes from "prop-types";

import BackgroundImage from "./BackgroundImage";

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
        <BackgroundImage
          image={img}
          height={height}
          imagePosition={imgPosition}
        >
          {title && subheading && (
            <div
              className="header__wrapper"
              style={{
                textAlign: textAlign,
                justifySelf: textAlign,
              }}
            >
              <h1 className="header__title">{title}</h1>
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
  title: PropTypes.string,
  height: PropTypes.number,
  textAlign: PropTypes.string,
  subheading: PropTypes.string,
  imgPosition: PropTypes.string,
};
