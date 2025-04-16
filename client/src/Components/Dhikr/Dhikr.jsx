import React from "react";
import "./Dhikr.css";
import Lottie from "lottie-react";
import dhikrAnimation from "../../assets/prophetStoriesAnimation.json";
import { dhikrInfo } from "./DATA/DhikrData";
import WideImages from "./WideImages";

export default function Dhikr() {
  return (
    <div className="main-dhikr">
      <div className="hadith-animation-banner">
        <Lottie className="load-animation" animationData={dhikrAnimation} />
      </div>
      <WideImages wideImages={dhikrInfo} />
    </div>
  );
}
