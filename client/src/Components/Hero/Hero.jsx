import React, { useState, useEffect, useRef } from "react";
import heroImage from "../../assets/heroImage.jpg";
import mapMarker from "../../assets/mapPin.png";
import "./Hero.css";
import { useFetch } from "../../Hooks/useFetch";
import axios from "axios";

export default function Hero() {
  const API_TOKEN = import.meta.env.VITE_API_TOKEN;
  const timeRef = useRef(null);

  const [prayerData, setPrayerData] = useState({
    timings: {},
    currentPrayer: "Loading...",
    upcomingPrayer: { name: "Loading...", time: "" },
    timeLeft: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const today = new Date();
      const h = today.getHours().toString().padStart(2, "0");
      const m = today.getMinutes().toString().padStart(2, "0");
      if (timeRef.current) {
        timeRef.current.innerText = `${h}:${m}`;
      }
    };

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const { fetchedData: location } = useFetch(
    `https://ipinfo.io/json?token=${API_TOKEN}`,
    { city: "", region: "", country: "" }
  );

  useEffect(() => {
    if (!location.city || !location.country) return;

    const fetchPrayerTimings = async () => {
      try {
        const response = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity?city=${location.city}&country=${location.country}&method=1&school=1`
        );
        const timings = response.data.data.timings;
        determineCurrentPrayer(timings);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    };

    fetchPrayerTimings();
  }, [location]);

  const determineCurrentPrayer = (timings) => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Current time in minutes

    const prayers = [
      { name: "Fajr", time: timings.Fajr },
      { name: "Dhuhr", time: timings.Dhuhr },
      { name: "Asr", time: timings.Asr },
      { name: "Maghrib", time: timings.Maghrib },
      { name: "Isha", time: timings.Isha },
    ];

    let current = "Isha";
    let nextPrayer = prayers[0]; // Default next prayer is Fajr
    let nextTimeDiff = 24 * 60; // Max difference in minutes

    prayers.forEach((prayer, index) => {
      const [h, m] = prayer.time.split(":").map(Number);
      const prayerTime = h * 60 + m; // Convert prayer time to minutes

      if (currentTime >= prayerTime) {
        current = prayer.name;
      } else if (prayerTime - currentTime < nextTimeDiff) {
        nextPrayer = prayers[index];
        nextTimeDiff = prayerTime - currentTime;
      }
    });

    // Special case for Fajr being the next prayer after Isha
    if (current === "Isha") {
      const [fajrH, fajrM] = timings.Fajr.split(":").map(Number);
      const fajrTime = fajrH * 60 + fajrM + 24 * 60; // Add 24 hours to Fajr time
      nextPrayer = { name: "Fajr", time: timings.Fajr };
      nextTimeDiff = fajrTime - currentTime;
    }

    setPrayerData({
      timings,
      currentPrayer: current,
      upcomingPrayer: nextPrayer,
      timeLeft:
        nextTimeDiff >= 60
          ? `${Math.floor(nextTimeDiff / 60)} hours ${
              nextTimeDiff % 60
            } min left`
          : `${nextTimeDiff} min left`,
    });
  };

  return (
    <div className="hero-container">
      <img src={heroImage} alt="hero-img" className="heroImage" />
      <div className="location-container">
        <div className="locate">
          <img src={mapMarker} alt="location-icon" className="location-icon" />
          <label className="location">
            {location.city}, {location.region}
          </label>
        </div>
        {/* <p className="city-country">
          {location.city}, {location.region}
        </p> */}
      </div>
      <div className="main-time-container">
        <p ref={timeRef} className="time-displayer">
          00:00
        </p>
        <p className="time-name">
          Now{" "}
          <span className="prayer-time-name">{prayerData.currentPrayer}</span>
        </p>
      </div>
      <div className="upcoming-prayer-time-container">
        <p className="upcoming-prayer-time">Upcoming Prayer Time</p>
        <p className="upcoming-prayer">
          <span className="specifir-prayer-name">
            {prayerData.upcomingPrayer.name}
          </span>{" "}
          {prayerData.upcomingPrayer.time}
        </p>
      </div>
      <div className="time-left-container">
        <p className="time-left">{prayerData.timeLeft}</p>
      </div>
    </div>
  );
}
