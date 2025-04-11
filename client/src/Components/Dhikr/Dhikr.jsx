import React from "react";
import "./Dhikr.css";
import WideImages from "./WideImages";
import HalfImages from "./HalfImages";
import { wideImages, halfImages, halfImages2 } from "./DATA/DhikrData";

export default function Dhikr() {
  return (
    <div className="dhikr-container">
      <WideImages wideImages={wideImages} />
      <HalfImages halfImages={halfImages} />
      <HalfImages halfImages={halfImages2} />
    </div>
  );
}
