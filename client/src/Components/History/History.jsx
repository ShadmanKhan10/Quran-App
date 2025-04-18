import React from "react";
import "./History.css";
import historyBanner from "../../assets/history-banner.jpeg";
import HistoryList from "./HistoryList";

export default function History() {
  return (
    <div>
      <img
        src={historyBanner}
        alt="history-banner"
        className="histroy-banner-img"
      />
      <HistoryList />
    </div>
  );
}
