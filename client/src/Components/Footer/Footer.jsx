import React from "react";
import "./Footer.css";
import { contactData, images, menuData } from "./DATA/Data";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  // Opens social media link in a new tab
  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  // Navigates to internal route
  const handleMenuClick = (location) => {
    navigate(location);
  };

  return (
    <div className="footer-container">
      <div className="follow-us-container">
        <p className="follow-us-title">FOLLOW US</p>
        <div className="social-icons-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.source}
              alt="social"
              className="social-icon"
              onClick={() => handleSocialClick(image.url)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>

      <div className="contact-navigate-container">
        <div className="contact-column">
          <p className="column-heading">CONTACT US</p>
          {contactData.map((data, index) => (
            <div key={index} className="contact-infos">
              <p className="contact-title">{data.title}</p>
              <p className="contact-description">{data.description}</p>
            </div>
          ))}
        </div>

        <div className="menu-column">
          <p className="column-heading">NAVIGATE</p>
          {menuData.map((data, index) => (
            <div
              key={index}
              className="menu-infos"
              onClick={() => handleMenuClick(data.location)}
              style={{ cursor: "pointer" }}
            >
              <p className="menu-title">{data.title}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="credit">© 2025 Developed by Sami and Shadman</p>
    </div>
  );
}
