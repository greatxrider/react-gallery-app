import React from "react";
import Photo from "../Photo/Photo";
import NoResults from "../NoResults/NoResults";

const PhotoList = ({ data, title }) => {
    let photo;

    if (data.length > 0) {
        photo = data.map(photo => <Photo key={photo.id} photo={photo} />)
    } else {
        photo = <NoResults />
    }

    return (
        <div className="photo-container">
            <h2>{title}</h2>
            <ul>
                {photo}
            </ul>
        </div>
    );
}

export default PhotoList;
