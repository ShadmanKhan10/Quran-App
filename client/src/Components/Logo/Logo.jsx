import React, { useState } from "react";
import "./Logo.css";
import logo from "../../assets/main-logo.png";
import menu from "../../assets/menu.png";
import Sidebar from "../Sidebar/Sidebar";

export default function Logo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSideBar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <>
      <div className="main-logo-container">
        <div className="logo">
          <img className="main-logo" src={logo} alt="logo" />
          <p className="logo-title-text">Safe Haven</p>
        </div>
        <img
          onClick={openSideBar}
          className="main-logo"
          src={menu}
          alt="logo"
        />
      </div>
      {isSidebarOpen && <Sidebar setIsSidebarOpen={setIsSidebarOpen} />}
    </>
  );
}
