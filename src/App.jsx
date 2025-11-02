import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";
import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [focussedEarthquake, setFocussedEarthquake] = useState({});
  const [size, setSize] = useState(1);

  const BASEURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/";
  // Die URLs der Feeds findest du auf dieser Webseite (rechte Seitenleiste):  https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

  return (
    <div className="app">
      <Header />
      <Sidebar earthquake={focussedEarthquake} size={size} setSize={setSize} />
      <div className="mainArea">
        <Map
          size={size}
          setSize={setSize}
          setFocussedEarthquake={setFocussedEarthquake}
        />
      </div>
    </div>
  );
}

export default App;
