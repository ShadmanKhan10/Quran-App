import React, { useEffect, useRef, useState } from "react";

const Qibla = () => {
  const videoRef = useRef(null);
  const arrowRef = useRef(null);
  const [qiblaDirection, setQiblaDirection] = useState(null);
  const [error, setError] = useState("");

  // Calculate Qibla direction from current lat/lon
  const getQiblaDirection = (lat, lon) => {
    const kaabaLat = 21.4225;
    const kaabaLon = 39.8262;
    const φ1 = (lat * Math.PI) / 180;
    const φ2 = (kaabaLat * Math.PI) / 180;
    const Δλ = ((kaabaLon - lon) * Math.PI) / 180;

    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x =
      Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
    const θ = Math.atan2(y, x);
    const bearing = (θ * 180) / Math.PI;
    return (bearing + 360) % 360;
  };

  // Get location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const dir = getQiblaDirection(latitude, longitude);
        setQiblaDirection(dir);
      },
      () => {
        setError("Location permission denied. Cannot calculate Qibla.");
      }
    );
  }, []);

  // Get camera access
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(() =>
        setError("Camera permission denied. Cannot show background.")
      );
  }, []);

  // Handle device orientation
  useEffect(() => {
    const handleOrientation = (event) => {
      if (qiblaDirection !== null) {
        const alpha = event.alpha;
        const rotation = qiblaDirection - alpha;
        if (arrowRef.current) {
          arrowRef.current.style.transform = `rotate(${rotation}deg)`;
        }
      }
    };

    window.addEventListener(
      "deviceorientationabsolute",
      handleOrientation,
      true
    );
    return () =>
      window.removeEventListener(
        "deviceorientationabsolute",
        handleOrientation
      );
  }, [qiblaDirection]);

  return (
    <div style={styles.container}>
      <video ref={videoRef} autoPlay muted playsInline style={styles.video} />
      <div style={styles.overlay}>
        {error && <p style={styles.error}>{error}</p>}
        <div ref={arrowRef} style={styles.arrow}>
          🧭
        </div>
        {!error && <p style={styles.text}>Point this arrow toward the Qibla</p>}
      </div>
    </div>
  );
};

// Vanilla CSS in JS
const styles = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },
  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 1,
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
  },
  arrow: {
    fontSize: "4rem",
    transition: "transform 0.3s ease",
  },
  text: {
    marginTop: "1rem",
    fontSize: "1.2rem",
  },
  error: {
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: "10px 20px",
    borderRadius: "10px",
    color: "#ffdddd",
    marginBottom: "1rem",
  },
};

export default Qibla;
