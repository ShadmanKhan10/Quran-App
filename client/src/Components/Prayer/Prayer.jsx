import React from "react";
import PrayerVisual from "./PrayerVisual";
import men from "../../assets/men.jpg";
import women from "../../assets/women.jpg";

import "./Prayer.css";
import PrayerInfo from "./PrayerInfo";

export default function Prayer() {
  return (
    <div className="prayer-container">
      <h2 className="prayer-visual-text">Prayer Learning</h2>
      <div className="prayer-visual-container">
        <PrayerVisual prayerFor="Men" prayerImg={men} />
        <PrayerVisual prayerFor="Women" prayerImg={women} />
      </div>
      <div className="prayer-info-container">
        <PrayerInfo />
      </div>
    </div>
  );
}
