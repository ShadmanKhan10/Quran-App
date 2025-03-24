import React from "react";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavIcon({ imgSrc, menuName, path, activeImgSource }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNvigation = () => {
    navigate(`/${path}`);
  };
  return (
    <>
      <div className="nav-icon-container" onClick={handleNvigation}>
        <img
          src={location.pathname === `/${path}` ? activeImgSource : imgSrc}
          alt={menuName}
          className="nav-icon"
        />
        <p className="menu-name">{menuName}</p>
      </div>
    </>
  );
}
