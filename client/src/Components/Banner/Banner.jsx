// import React from "react";
// import { BannerData } from "./BannerData";
// import Carousel from "./Carousel";
// import "./Banner.css";

// export default function Banner() {
//   return (
//     <>
//       <h1 className="banner-events-text">Events</h1>
//       <div className="banner-slider-container">
//         {BannerData.map((data, index) => (
//           <Carousel
//             key={index}
//             imgSrc={data.imgSrc}
//             heading={data.heading}
//             subheading={data.subheading}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { BannerData } from "./BannerData";
import Carousel from "./Carousel";
import "./Banner.css";

export default function Banner() {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prev) => (prev + 1) % BannerData.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="banner-events-text">Events</h1>
      <div className="banner-slider-container">
        <Carousel
          imgSrc={BannerData[currIndex].imgSrc}
          heading={BannerData[currIndex].heading}
          subheading={BannerData[currIndex].subheading}
        />
      </div>
    </>
  );
}
