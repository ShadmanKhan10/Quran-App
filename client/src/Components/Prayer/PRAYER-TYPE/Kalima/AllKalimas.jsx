import React from "react";
import { kalimas } from "./Data";

export default function AllKalimas() {
  return (
    <div className="kalimas">
      {kalimas.map((kalima, index) => (
        <div key={index} className="single-kalima-container">
          <div className="kalima-name-container">
            <p className="kalima-name">{kalima.name}</p>
          </div>
          <p className="kalima-arabic">{kalima.arabic}</p>
          <p className="kalima-translit">{kalima.transliteration}</p>
          <p className="kalima-translation">{kalima.translation}</p>
        </div>
      ))}
    </div>
  );
}
