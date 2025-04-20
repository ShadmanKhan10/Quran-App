import React from "react";
import { useParams } from "react-router-dom";
import PillerBanner from "./PillerBanner";
import PillerInfo from "./PillerInfo";
import {
  bannerImages,
  faithPiller,
  hajjPiller,
  jihadEssence,
  salahPiller,
  sawmPiller,
  zakatPiller,
} from "./Data/Data";

const pillerDataMap = {
  faith: faithPiller,
  salahwat: salahPiller,
  hajj: hajjPiller,
  sawm: sawmPiller,
  donation: zakatPiller,
  jihad: jihadEssence,
};

export default function PerticularPiller() {
  const { piller } = useParams();
  const selectedData = pillerDataMap[piller];

  return (
    <div className="perticular-piller-container">
      <PillerBanner imgSrc={bannerImages[piller]} />
      {selectedData && <PillerInfo data={selectedData} />}
    </div>
  );
}
