import React from "react";
import stop from "../../assets/stop.png";
import { useNavigate } from "react-router-dom";

export default function Chapters({
  name,
  id,
  arabicName,
  revelation,
  verses,
  isJuzActive,
  isPageActive,
  startPage,
}) {
  const navigate = useNavigate();
  const handleChapterNavigation = () => {
    const newChapterName = name;
    isPageActive
      ? navigate(`/quran/${newChapterName}/${id}/${startPage}`)
      : navigate(`/quran/${newChapterName}/${id}`);
  };
  return (
    <div className="chapter-container" onClick={handleChapterNavigation}>
      <div className="chapter-left-container">
        <div className="chaper-no-container">
          <p className="chapter-no">{id}</p>
          <img src={stop} alt="stop" className="stop-img" />
        </div>
        <div className="chaper-details-container">
          <p className="chapter-name">{name}</p>
          <p className="chapter-verse-revelation">
            {verses} {!isJuzActive && "Verses"} | {revelation}
          </p>
        </div>
      </div>
      <div className="chapter-right-container">
        <p className="chapter-arabic-name">{arabicName}</p>
        {isPageActive && (
          <p className="chapter-start-page">Page: {startPage}</p>
        )}
      </div>
    </div>
  );
}
