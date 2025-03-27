import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quran from "./Components/Quran/Quran";
import Home from "./Components/Home/Home";
import SpecifChapter from "./Components/Quran/SpecifChapter";
import SpecificPage from "./Components/Quran/SpecificPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/quran/:chapterType/:id" element={<SpecifChapter />} />
          <Route
            path="/quran/:chapterType/:id/:startPage"
            element={<SpecificPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
