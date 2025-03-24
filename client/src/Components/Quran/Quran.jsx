import React, { useState } from "react";
import "./Quran.css";
import { chapters } from "./DATA/ChaptersData";
import { juzs } from "./DATA/JuzData";
import Navbar from "../Navbar/Navbar";
import Chapters from "./Chapters";

export default function Quran() {
  const [isChapterActive, setIsChapterActive] = useState(true);
  const [isJuzActive, setIsJuzActive] = useState(false);

  const displayChapters = () => {
    setIsChapterActive(true);
    setIsJuzActive(false);
  };
  const displayJuz = () => {
    setIsJuzActive(true);
    setIsChapterActive(false);
  };
  return (
    <>
      <div className="quran-service-container">
        <div className="quran-nav-container">
          <div className="quran-nav-element">
            <p className="quran-element" onClick={displayChapters}>
              Chapter
            </p>
          </div>
          <div className="quran-nav-element">
            <p className="quran-element" onClick={displayJuz}>
              Juz
            </p>
          </div>
          <div className="quran-nav-element">
            <p className="quran-element" onClick={displayJuz}>
              Listen
            </p>
          </div>
        </div>
        {isChapterActive && (
          <div>
            {chapters.map((chapter) => (
              <Chapters
                key={chapter.id}
                id={chapter.id}
                chapterNo={chapter.id}
                name={chapter.name}
                arabicName={chapter.arabicName}
                verses={chapter.verses}
                revelation={chapter.revelation}
                isJuzActive={isJuzActive}
              />
            ))}
          </div>
        )}
        {isJuzActive && (
          <div>
            {juzs.map((juz) => (
              <Chapters
                key={juz.id}
                id={juz.id}
                chapterNo={juz.id}
                name={juz.name}
                arabicName={juz.arabicName}
                verses={juz.verses}
                revelation={juz.revelation}
                isJuzActive={isJuzActive}
              />
            ))}
          </div>
        )}
      </div>
      <Navbar />
    </>
  );
}
