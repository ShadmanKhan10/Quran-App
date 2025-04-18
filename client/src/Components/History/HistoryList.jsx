import React from "react";
import { histroyList } from "./DATA/HistoryData";
import { useNavigate } from "react-router-dom";

export default function HistoryList() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(`/history/${path}`);
  };
  return (
    <div className="dhikr-container">
      {histroyList.map((list) => (
        <div
          className="wide-images-container"
          key={list.title}
          onClick={() => handleNavigation(list.location)}
        >
          <img src={list.imgIcon} alt={list.title} className="dhikr-images" />
          <p className="image-name">{list.title}</p>
        </div>
      ))}
          
    </div>
  );
}
