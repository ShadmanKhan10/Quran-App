import React from "react";
import HadithBooks from "./HadithBooks";
import Lottie from "lottie-react";
import hadithBannerAnimation from "../../assets/hadithBannerAnimation.json";
import "./Hadith.css";

export default function Hadith() {
  return (
    <div>
      <div className="hadith-animation-banner">
        <Lottie
          className="load-animation"
          animationData={hadithBannerAnimation}
        />
      </div>
      <p className="hadith-main-heading">
        These are the Total books of Hadith Go ahead Read One
      </p>
      <HadithBooks />
    </div>
  );
}
