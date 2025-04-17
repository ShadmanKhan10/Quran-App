import React, { useEffect, useState } from "react";
import arrowImg from "../../assets/move.png";

export default function Qibla() {
  const [location, setLocation] = useState(null);
  const [qiblaAngle, setQiblaAngle] = useState(null);
  const [heading, setHeading] = useState(0);

  const kaabaCoordinates = { lat: 21.4225, lon: 39.8262 };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (location) {
      const { lat, lon } = location;

      const φ1 = (lat * Math.PI) / 180;
      const λ1 = (lon * Math.PI) / 180;
      const φ2 = (kaabaCoordinates.lat * Math.PI) / 180;
      const λ2 = (kaabaCoordinates.lon * Math.PI) / 180;

      const deltaLambda = λ2 - λ1;

      const x = Math.sin(deltaLambda) * Math.cos(φ2);
      const y =
        Math.cos(φ1) * Math.sin(φ2) -
        Math.sin(φ1) * Math.cos(φ2) * Math.cos(deltaLambda);

      const theta = Math.atan2(x, y);
      const bearing = (theta * 180) / Math.PI;
      const normalizedBearing = (bearing + 360) % 360;

      setQiblaAngle(normalizedBearing);
    }
  }, [location]);

  useEffect(() => {
    const handleOrientation = (event) => {
      if (event.absolute || event.webkitCompassHeading !== undefined) {
        const compass = event.webkitCompassHeading || 360 - event.alpha;
        setHeading(compass);
      } else {
        setHeading(360 - event.alpha);
      }
    };

    const requestPermission = async () => {
      if (
        typeof DeviceOrientationEvent !== "undefined" &&
        typeof DeviceOrientationEvent.requestPermission === "function"
      ) {
        try {
          const permission = await DeviceOrientationEvent.requestPermission();
          if (permission === "granted") {
            window.addEventListener(
              "deviceorientation",
              handleOrientation,
              true
            );
          }
        } catch (err) {
          console.error("DeviceOrientation permission error:", err);
        }
      } else {
        window.addEventListener("deviceorientation", handleOrientation, true);
      }
    };

    requestPermission();

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  const rotation = qiblaAngle !== null ? (qiblaAngle - heading + 360) % 360 : 0;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Qibla Finder</h1>

      {location && qiblaAngle !== null && (
        <>
          <p>
            My Coordinates: {location.lat.toFixed(4)}, {location.lon.toFixed(4)}
          </p>
          <p>
            Kaaba Direction: <strong>{qiblaAngle.toFixed(2)}°</strong>
          </p>
          <p>
            Device Heading: <strong>{heading.toFixed(2)}°</strong>
          </p>

          <div
            style={{
              width: "120px",
              height: "120px",
              margin: "30px auto",
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <img
              src={arrowImg}
              alt="Qibla Arrow"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </>
      )}
    </div>
  );
}
