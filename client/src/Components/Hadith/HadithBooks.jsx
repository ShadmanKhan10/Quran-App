import React, { useState } from "react";
import "./hadith.css";
import { useNavigate } from "react-router-dom";

export default function HadithBooks() {
  const navigate = useNavigate();
  const hadithBooks = [
    "sahih-bukhari",
    "sahih-muslim",
    "al-tirmidhi",
    "abu-dawood",
    "ibn-e-majah",
    "sunan-nasai",
  ];

  const handleBookClick = (book) => {
    navigate(`/hadith/${book}`);
  };

  return (
    <div className="hadith-books-container">
      {hadithBooks.map((book) => (
        <div
          key={book}
          onClick={() => handleBookClick(book)}
          className="hadith-book"
        >
          <p className="hadith-name">{book}</p>
        </div>
      ))}
    </div>
  );
}
