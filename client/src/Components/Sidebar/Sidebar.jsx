import React from "react";
import "./Sidebar.css";
import { motion } from "framer-motion";
import sidebarImg from "../../assets/sidebarImg.jpg";
import HadithColumn from "./HadithColumn";

import {
  columnData1,
  columnData2,
  columnData3,
  columnData4,
  columnData5,
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
          <img src={sidebarImg} alt="banner" className="sidebar-banner" />
        </div>
        <HadithColumn columnData={columnData2} />
        <HadithColumn columnData={columnData1} />
        <HadithColumn columnData={columnData3} />
        <HadithColumn columnData={columnData4} />
        <HadithColumn columnData={columnData5} />
      </motion.div>
    </>
  );
}
