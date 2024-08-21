// Photo.jsx
import React from 'react';

const Photo = ({ photo }) => {
    const { farm, server, id, secret, title } = photo;
    const src = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

    return (
        <li>
            <img src={src} alt={title} />
        </li>
    );
}

export default Photo;