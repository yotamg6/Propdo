import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

const Map = () => {
  const mapContainer = useRef(null);

  const [map, setMap] = useState();
  const [lng, setLng] = useState(35.217018);
  const [lat, setLat] = useState(29.5518);
  const [zoom, setZoom] = useState(7);

  mapboxgl.accessToken =
    "pk.eyJ1IjoieW90YW1nNiIsImEiOiJjbDNqN25zcjYwNWRvM3FxcmVkcnAxems0In0.8Q8VNa8KUpT_H9Tmtu38Kw";

  const handleLatChange = (e) => {
    setLat(e.target.value);
  };

  const handleLngChange = (e) => {
    setLng(e.target.value);
  };

  const initUpdateMap = () => {
    setMap(
      new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: zoom,
      })
    );
  };

  useEffect(() => {
    initUpdateMap();
  }, []);

  useEffect(() => {
    if (map) {
      map.on("click", (e) => {
        setLng(e.lngLat.lng);
        setLat(e.lngLat.lat);
        initUpdateMap();
      });
    }
  }, [map]);

  return (
    <>
      <div>
        <div ref={mapContainer} className="map-container" />
        <div className="sidebar">
          Latitude: {lat} | Longitude: {lng} | Zoom: {zoom}
        </div>
        <div className="latitudeLabel">Latitude</div>
        <input
          type="text"
          id="latitude"
          className="latitudeBar"
          placeholder="Latitude"
          onChange={handleLatChange}
          value={lat}
        />
        <div className="longitudeLabel">Longitude</div>
        <input
          type="text"
          id="longitude"
          className="longitudeBar"
          placeholder="Longitude"
          onChange={handleLngChange}
          value={lng}
        />
        <button className="btn" onClick={initUpdateMap}>
          Go
        </button>
      </div>
    </>
  );
};
export default Map;
