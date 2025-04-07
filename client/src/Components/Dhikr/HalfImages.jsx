import React from "react";

export default function HalfImages({ halfImages }) {
  return (
    <div className="half-images-container">
      {halfImages.map((image) => (
        <div className="perticular-half-images-container">
          <img
            key={image.name}
            src={image.source}
            alt={image.name}
            className="dhikr-images"
          />
          <p className="image-name-half">{image.name}</p>
        </div>
      ))}
    </div>
  );
}
