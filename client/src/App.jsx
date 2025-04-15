import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quran from "./Components/Quran/Quran";
import Home from "./Components/Home/Home";
import SpecifChapter from "./Components/Quran/SpecifChapter";
import SpecificPage from "./Components/Quran/SpecificPage";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Dua from "./Components/Dua/Dua";
import Dhikr from "./Components/Dhikr/Dhikr";
import Prayer from "./Components/Prayer/Prayer";
import Navbar from "./Components/Navbar/Navbar";
import Zakat from "./Components/Zakat/Zakat";
import PrayerType from "./Components/Prayer/PrayerType";
import Hadith from "./Components/Hadith/Hadith";
import HadithChapters from "./Components/Hadith/HadithChapters";
import SelectedChapter from "./Components/Hadith/SelectedChapter";
import SingleHadith from "./Components/Hadith/SingleHadith";
import DhikrTime from "./Components/Dhikr/DhikrTime";

function App() {
  return (
    <>
      {/* "thanx for the invitationn as well s sthe ipportuniyy" */}
      <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quran" element={<Quran />} />
            <Route path="/quran/:chapterType/:id" element={<SpecifChapter />} />
            <Route
              path="/quran/:chapterType/:id/:startPage"
              element={<SpecificPage />}
            />
            <Route path="/dua" element={<Dua />} />
            <Route path="/dhikr" element={<Dhikr />} />
            <Route path="/dhikr/:time" element={<DhikrTime />} />
            <Route path="/prayer" element={<Prayer />} />
            <Route path="/prayer/:prayerType" element={<PrayerType />} />
            <Route path="/zakat" element={<Zakat />} />
            <Route path="/hadith" element={<Hadith />} />
            <Route path="/hadith/:hadithBooks" element={<HadithChapters />} />
            <Route
              path="/hadith/:hadithBooks/:chapterName"
              element={<SelectedChapter />}
            />
            <Route
              path="/hadith/:hadithBooks/hadith/:hadithNumber"
              element={<SingleHadith />}
            />
          </Routes>
          <Navbar />
        </BrowserRouter>
      </SkeletonTheme>
    </>
  );
}

export default App;
