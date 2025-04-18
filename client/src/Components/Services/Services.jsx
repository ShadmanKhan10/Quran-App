import React, { useState } from "react";
import { SERVICESDATA } from "./ServicesDATA";
import ReuseService from "./ReuseService";
import "./Services.css";

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? SERVICESDATA : SERVICESDATA.slice(0, 6);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };
  return (
    <>
      <div className="explore-container">
        <div className="explore-left">
          <h3 className="explore-text">Explore</h3>
          <p className="worship-text">Worship features for you</p>
        </div>
        <div className="explore-right">
          <p onClick={toggleShowAll} className="show-all-text">
            {showAll ? "show less" : "show all"}
          </p>
        </div>
      </div>
      <div className="card-container">
        {visibleServices.map((data) => (
          <ReuseService
            className="services-card"
            key={data.heading}
            imgSrc={data.imgSrc}
            heading={data.heading}
            subHeading={data.subHeading}
            path={data.path}
          />
        ))}
      </div>
    </>
  );
}
