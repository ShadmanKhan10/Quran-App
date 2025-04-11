import React from "react";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Navbar from "../Navbar/Navbar";
import { BannerData } from "../Banner/BannerData";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner BannerData={BannerData} />
      <Services />
      {/* <Navbar /> */}
    </>
  );
}
