import React from "react";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Navbar from "../Navbar/Navbar";
import { BannerData } from "../Banner/BannerData";
import Logo from "../Logo/Logo";

export default function Home() {
  return (
    <>
      <Logo />
      <Hero />
      <Banner BannerData={BannerData} />
      <Services />
      {/* <Navbar /> */}
    </>
  );
}
