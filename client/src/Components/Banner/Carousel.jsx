import React from "react";

export default function ({ imgSrc, heading, subheading }) {
  return (
    <div className="carousel">
      <div className="carousel-left">
        <h1 className="banner-heading">{heading}</h1>
        <p className="banner-subheading">{subheading}</p>
      </div>
      <div className="carousel-right">
        <img src={imgSrc} alt={imgSrc} className="banner-img" />
      </div>
    </div>
  );
}
