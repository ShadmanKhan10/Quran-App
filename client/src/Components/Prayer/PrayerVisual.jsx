import React from "react";

export default function PrayerVisual({ prayerFor, prayerImg }) {
  return (
    <div className="prayer-visual">
      <img src={prayerImg} alt="prayer" className="prayer-salah-img" />
      <p className="prayer-gender">{prayerFor}</p>
    </div>
  );
}
