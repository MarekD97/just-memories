import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const BackgroundImage = (props) => {
  const { children, height = 740, image, imagePosition = "center 30%" } = props;
  return (
    <div className="background-image">
      <div
        strength={-100}
        style={{
          gridArea: "1/1",
        }}
      >
        {image?.url ? (
          <img
            src={image}
            style={{
              gridArea: "1/1",
              height: height,
              width: "100%",
              objectFit: "cover",
              objectPosition: imagePosition,
            }}
            aspectratio={3 / 1}
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={image}
            objectFit={"cover"}
            objectPosition={imagePosition}
            style={{
              gridArea: "1/1",
              maxHeight: height,
            }}
            layout="fullWidth"
            aspectratio={3 / 1}
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
      </div>
      <div className="background-image__content">{children}</div>
    </div>
  );
};

export default BackgroundImage;
