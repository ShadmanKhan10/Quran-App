import React from "react";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import { BannerData } from "../Banner/BannerData";
import Logo from "../Logo/Logo";
import "./Home.css";
import Pillers from "./Pillers";

export default function Home() {
  return (
    <div className="main-home-container">
      <Logo />
      <Hero />
      <Banner BannerData={BannerData} />
      <Services />
      <h1 className="essence-text">Essense of Islam</h1>
      <p className="essense-subheading">
        Core Beliefs and Practices of the Faith
      </p>
      <Pillers />
    </div>
  );
}
