import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";
import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [focussedEarthquake, setFocussedEarthquake] = useState({});
  const [size, setSize] = useState(1);
  const [erdbeben, setErdbeben] = useState([]);
  const [minMagnitude, setMinMagnitude] = useState("1.0");
  //console.log("Minimale Magnitude:", minMagnitude);
  const [timeRange, setTimeRange] = useState("day");
  //console.log("Zeitspanne:", timeRange);

  const BASEURL = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${minMagnitude}_${timeRange}.geojson`;
  // Die URLs der Feeds findest du auf dieser Webseite (rechte Seitenleiste):  https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

  useEffect(() => {
    fetch(BASEURL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => setErdbeben(json))
      .catch((err) => console.error("Fetch failed:", err));
  }, [BASEURL]);

  return (
    <div className="app">
      <Header setMinMagnitude={setMinMagnitude} setTimeRange={setTimeRange} />
      <Sidebar earthquake={focussedEarthquake} size={size} setSize={setSize} />
      <div className="mainArea">
        <Map
          size={size}
          setSize={setSize}
          setFocussedEarthquake={setFocussedEarthquake}
          erdbeben={erdbeben}
        />
      </div>
    </div>
  );
}

export default App;
