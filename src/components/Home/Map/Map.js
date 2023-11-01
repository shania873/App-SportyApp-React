import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  let map = null;

  async function initMap() {
    map = await L.map("my-map").setView([50.499527, 4.475403], 10);
    const myAPIKey = "e78636bd254c46358427243279a7a857";

    const isRetina = L.Browser.retina;
    const baseUrl =
      "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
    const retinaUrl =
      "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";

    L.tileLayer(isRetina ? retinaUrl : baseUrl, {
      apiKey: myAPIKey,
      maxZoom: 20,
      id: "osm-bright",
    }).addTo(map);

    map.zoomControl.remove();
    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);
  }

  React.useEffect(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        initMap();
      }, 2000);
    });
  }, [map]);

  return <div id="my-map"></div>;
};

export default Map;
