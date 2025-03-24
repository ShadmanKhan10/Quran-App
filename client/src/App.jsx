import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quran from "./Components/Quran/Quran";
import Home from "./Components/Home/Home";
import SpecifChapter from "./Components/Quran/SpecifChapter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/quran/:id" element={<SpecifChapter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
