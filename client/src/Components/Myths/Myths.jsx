import React, { useState } from "react";
import mythsBanner from "../../assets/myths-banner.jpg";
import "./Myths.css";
import IslamicMyths from "./IslamicMyths";
import wrong from "../../assets/wrong.png";
import tv from "../../assets/tv.png";
import { mediaIslam, mythList } from "./DATA/MythsData";

export default function Myths() {
  return (
    <div className="myth-component">
      <img src={mythsBanner} className="myths-banner" alt="myths" />
      <p className="myths-texts-description">
        Some common misconceptions about islam
      </p>
      <IslamicMyths mythIcon={wrong} list={mythList} />
      <p className="myths-texts-description">How media shows islam</p>
      <IslamicMyths mythIcon={tv} list={mediaIslam} />
    </div>
  );
}
