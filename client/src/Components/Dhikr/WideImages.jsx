import React from "react";
import { useNavigate } from "react-router-dom";

export default function WideImages({ wideImages }) {
  const navigate = useNavigate();

  const handleNavigation = (time) => {
    navigate(`/dhikr/${time}`);
  };
  return (
    <>
      {wideImages.map((image) => (
        <div className="wide-images-container" key={image.name}>
          <img
            src={image.source}
            alt={image.name}
            className="dhikr-images"
            onClick={() => handleNavigation(image.name)}
          />
          <p className="image-name">{image.name}</p>
        </div>
      ))}
    </>
  );
}
