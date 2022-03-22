import React from 'react';
import PropTypes from 'prop-types';
import {GatsbyImage, getImage } from 'gatsby-plugin-image';


const PhotoAlbum = ({
    images,
    columns = 3
}) => {

    const imageSources = images.slice(0, columns).map(item => ({
        image: getImage(item.image) || item.image,
        alt: item.alt,
    }));

    return (
        <div className="album-container">
            {imageSources.map((item, index) => (
                <GatsbyImage
                    key={index} 
                    className={`album-image ${index === parseInt(columns / 2) ? "album-image--center" : ""}`}
                    image={item.image}
                    objectFit={"cover"}
                    loading="lazy"
                    layout="fullWidth"
                    alt={item.alt}
                    formats={["auto", "webp", "avif"]}
                />
            ))
                
            }
        </div>
    );
}

PhotoAlbum.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        alt: PropTypes.string,
    }))
}

export default PhotoAlbum;