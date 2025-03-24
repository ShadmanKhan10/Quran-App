import React from "react";
import { BannerData } from "./BannerData";
import Carousel from "./Carousel";
import "./Banner.css";

export default function Banner() {
  return (
    <>
      <h1 className="banner-events-text">Events</h1>
      <div className="banner-slider-container">
        {BannerData.map((data, index) => (
          <Carousel
            key={index}
            imgSrc={data.imgSrc}
            heading={data.heading}
            subheading={data.subheading}
          />
        ))}
      </div>
    </>
  );
}
