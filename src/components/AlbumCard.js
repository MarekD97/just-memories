import { Link } from 'gatsby';
import React from 'react';

const AlbumCard = ({
    image,
    heading,
    subheading
}) => (
    <div className="album__card">
        <img src={image} alt="Opis" style={{width: '100%'}}/>
        <Link className="album__link" href="#">
            <h2 className="album__h2">{heading}</h2>
            <h3 className="album__h3">{subheading}</h3>
        </Link>
    </div>
)

export default AlbumCard;