import React from "react";
import { useNavigate } from "react-router-dom";

export default function HalfImages({ halfImages }) {
  const navigate = useNavigate();

  const handleNavigation = (time) => {
    navigate(`/dhikr/${time}`);
  };
  return (
    <div className="half-images-container">
      {halfImages.map((image) => (
        <div className="perticular-half-images-container" key={image.name}>
          <img
            src={image.source}
            alt={image.name}
            className="dhikr-images"
            onClick={() => handleNavigation(image.name)}
          />
          <p className="image-name-half">{image.name}</p>
        </div>
      ))}
    </div>
  );
}
