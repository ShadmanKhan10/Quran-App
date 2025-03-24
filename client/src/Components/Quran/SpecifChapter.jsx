import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SpecifChapter() {
  const [isTranlationActive, setIsTranslationActive] = useState(true);
  const [quranChapter, setQuranChapter] = useState({
    english: [],
    arabic: [],
  });
  const { id } = useParams();

  useEffect(() => {
    const getChapterDetails = async () => {
      try {
        const response = await axios.get(
          `https://quranapi.pages.dev/api/${id}.json`
        );
        setQuranChapter({
          english: response.data.english,
          arabic: response.data.arabic1,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getChapterDetails();
  }, [id]);

  const handleTranslation = () => {
    setIsTranslationActive(true);
  };
  const handleReading = () => {
    setIsTranslationActive(false);
  };

  return (
    <>
      <div className="quran-nav-container">
        <div className="quran-nav-element">
          <p className="quran-element" onClick={handleTranslation}>
            Translation
          </p>
        </div>
        <div className="quran-nav-element">
          <p className="quran-element" onClick={handleReading}>
            Read
          </p>
        </div>
      </div>
      <div className="all-verses-container">
        {isTranlationActive && (
          <div>
            {quranChapter.arabic.map((arabicVerse, index) => (
              <div key={index} className="verse-container">
                <div className="verse-util">{index + 1}</div>
                <div className="arabic-verse-container">
                  <p className="arabic-text">{arabicVerse}</p>
                </div>

                <div className="english-verse-container">
                  <p className="english-text">{quranChapter.english[index]}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {!isTranlationActive && (
          <div>
            {quranChapter.arabic.map((arabicVerse, index) => (
              <div key={index} className="verse-container-read">
                <div className="arabic-verse-container-read">
                  <div className="arabic-txt-readnumber-c">
                    <p className="arabic-text-readnumber">{index + 1}</p>
                  </div>
                  <div className="arabic-txt-readverse-c">
                    <p className="arabic-text-read">{arabicVerse}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
