import React from "react";
import "./Sidebar.css";
import { motion } from "framer-motion";
import sidebarImg from "../../assets/sidebarImg.jpg";
import HadithColumn from "./HadithColumn";

import {
  columnData7,
  columnData2,
  columnData3,
  columnData4,
  columnData5,
  columnData8,
  columnData9,
} from "./DATA/ColumnData";

export default function Sidebar({ setIsSidebarOpen }) {
  return (
    <>
      <div
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        className="sidebar-overlay"
      ></div>
      <motion.div
        className="sidebar-container"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.4 }}
      >
        <div className="sidebar-banner-img-container">
          <img
            src={sidebarImg}
            alt="banner"
            className="sidebar-banner"
            loading="lazy"
          />
        </div>
        <HadithColumn
          columnData={columnData7}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <HadithColumn
          columnData={columnData9}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <HadithColumn
          columnData={columnData2}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <HadithColumn
          columnData={columnData3}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <HadithColumn
          columnData={columnData4}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <HadithColumn
          columnData={columnData5}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <HadithColumn
          columnData={columnData8}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="share-side-c">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              "Check out this amazing Quran app: https://quran-space.netlify.app/"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-side-a"
          >
            Share QuranSpace via WhatsApp
          </a>
        </div>
      </motion.div>
    </>
  );
}
