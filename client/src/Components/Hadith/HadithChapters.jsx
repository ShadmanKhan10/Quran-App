import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import search from "../../assets/search.png";
import Banner from "../Banner/Banner";
import { HadithBannerData } from "../Banner/BannerData";

export default function HadithChapters() {
  const { hadithBooks } = useParams();
  const [loading, setLoading] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchChaptersName = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://hadithapi.com/api/${hadithBooks}/chapters?apiKey=$2y$10$L8kMgQzxm2IBTuoc9CODTOoZ25BLV7a3lrr2VTgqplEQXNfYGK3XS`
        );
        setChapters(response.data.chapters);
      } catch (error) {
        console.log("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchChaptersName();
  }, []);

  const navigateToChapter = (chap, chapterNumber) => {
    navigate(`/hadith/${hadithBooks}/${chap}`, {
      state: { chapterNumber },
    });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (loading) return <p>loading</p>;

  return (
    <>
      <Banner BannerData={HadithBannerData} />
      <div className="all-chap-cont">
        <div className="right-search-container hadith-search-cont">
          <div className="input-container">
            <input
              type="text"
              onChange={handleSearchChange}
              value={searchQuery}
              className="search-input"
              placeholder={" Search by Hadith Number Eg. 123"}
            />
            <div className="search-img-container">
              <img
                src={search}
                alt="search"
                className="search-img"
                onClick={() =>
                  navigate(`/hadith/${hadithBooks}/hadith/${searchQuery}`)
                }
              />
            </div>
          </div>
        </div>
        <div className="chap-cont">
          {chapters
            .filter(
              (chapter) =>
                chapter.chapterEnglish !== "Al-Maharbeen" &&
                chapter.chapterEnglish !==
                  "Call to Prayers (Adhaan) (Sufa-Tu-Salat)"
            )
            .map((chapter, index) => (
              <div
                className="single-chap-cont"
                key={index}
                onClick={() =>
                  navigateToChapter(
                    chapter.chapterEnglish,
                    chapter.chapterNumber
                  )
                }
              >
                <p className="chap-name-title">
                  {chapter.chapterNumber} {chapter.chapterEnglish}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
