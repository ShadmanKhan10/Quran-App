import React, { useState } from "react";
import { duasList } from "./DATA/DuaList";
import Navbar from "../Navbar/Navbar";
import dua from "../../assets/dua.png";
import "./Dua.css";

export default function Dua() {
  const [selectedMood, setSelectedMood] = useState(null);
  return (
    <>
      <div className="dua-container">
        <h1 className="heading-dua-text">Find peace in every moment</h1>
        <div className="subheading-dua-container">
          <p className="subheading-dua-text">Choose Your Mood & Recite a Dua</p>{" "}
          <img src={dua} alt="dua" className="dua-icon" />
        </div>
        <div className="button-container">
          {duasList.map((item) => (
            <button
              className={
                selectedMood?.mood === item.mood
                  ? "mood-button-active"
                  : "mood-button"
              }
              key={item.mood}
              onClick={() => setSelectedMood(item)}
            >
              {item.mood}
            </button>
          ))}
        </div>

        {selectedMood && (
          <div>
            <h2 className="dua-header-text">
              Duas for {selectedMood.mood} you!
            </h2>
            {selectedMood.duas.map((dua, index) => (
              <div key={index} className="dua-container-texts">
                <p className="main-dua-text">{dua.text}</p>
                <p className="dua-transliteration">{dua.transliteration}</p>
                <p className="dua-translation">{dua.translation}</p>
                <label className="dua-reference-text">{dua.reference}</label>
              </div>
            ))}
          </div>
        )}
      </div>
      <Navbar />
    </>
  );
}
