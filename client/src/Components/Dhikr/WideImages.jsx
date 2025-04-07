import React from "react";

export default function WideImages({ wideImages }) {
  return (
    <>
      {wideImages.map((image) => (
        <div className="wide-images-container">
          <img
            key={image.name}
            src={image.source}
            alt={image.name}
            className="dhikr-images"
          />
          <p className="image-name">{image.name}</p>
        </div>
      ))}
    </>
  );
}
