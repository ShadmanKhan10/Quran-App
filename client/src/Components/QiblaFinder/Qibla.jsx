import React, { useEffect, useState } from "react";
import "./Qibla.css";

const Qibla = () => {
  const [mosques, setMosques] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Latitude:", latitude, "Longitude:", longitude);

        // Overpass API query to find mosques within 5000 meters (5 km)
        const query = `
          [out:json];
          (
            node["amenity"="place_of_worship"](around:5000,${latitude},${longitude});
            way["amenity"="place_of_worship"](around:5000,${latitude},${longitude});
            relation["amenity"="place_of_worship"](around:5000,${latitude},${longitude});
          );
          out center;
        `;

        try {
          const response = await fetch(
            "https://overpass-api.de/api/interpreter",
            {
              method: "POST",
              body: query,
            }
          );
          const data = await response.json();
          console.log("Overpass Response:", data);

          if (data.elements.length === 0) {
            setError("No mosques or places of worship found within 5 km.");
          } else {
            setMosques(data.elements);
          }
        } catch (err) {
          console.error(err);
          setError("Failed to fetch places of worship.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Unable to retrieve your location.");
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="mosque-container">
      <h2>Nearby Mosques / Places of Worship (within 5 km)</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ul>
        {mosques.map((place, index) => (
          <li key={index}>
            <strong>{place.tags?.name || "Unnamed Place"}</strong>
            <br />
            Latitude: {place.lat || place.center?.lat}, Longitude:{" "}
            {place.lon || place.center?.lon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Qibla;
