import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
// import Geocoder from "react-map-gl-geocoder";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useEffect, useContext, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { Box, TextField, Button } from "@mui/material/";

const Map = () => {
  const mapContainer = useRef(null);
  //   const map = useRef(null);

  const [map, setMap] = useState();
  const [lng, setLng] = useState(35.217018);
  const [lat, setLat] = useState(29.5518);
  const [zoom, setZoom] = useState(7);
  const [latValue, setLatValue] = useState();
  const [lngValue, setLngValue] = useState();

  mapboxgl.accessToken =
    "pk.eyJ1IjoieW90YW1nNiIsImEiOiJjbDNqN25zcjYwNWRvM3FxcmVkcnAxems0In0.8Q8VNa8KUpT_H9Tmtu38Kw";

  const handleLatChange = (e) => {
    setLat(Number(e.target.value));
  };

  const handleLngChange = (e) => {
    setLng(Number(e.target.value));
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
        console.log("click", e.lngLat.lng);
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
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>

        <input
          type="text"
          id="latitude"
          className="latitudeBar"
          placeholder="Latitude"
          onChange={handleLatChange}
          value={lat}
        />
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
//   const mapRef = useRef();
//   const map = useRef(null);

// if (map.current) return; // initialize map only once
// map.current = new mapboxgl.Map({
//   container: mapContainer.current,
//   style: "mapbox://styles/mapbox/streets-v11",
//   center: [lng, lat],
//   zoom: zoom,
// });

// if (!map.current) return; // wait for map to initialize

//   const geocoder = new MapboxGeocoder({
//     accessToken:
//       "pk.eyJ1IjoieW90YW1nNiIsImEiOiJjbDNqN25zcjYwNWRvM3FxcmVkcnAxems0In0.8Q8VNa8KUpT_H9Tmtu38Kw",
//   });

//   useEffect(() => {
//     map = new mapboxgl.Map({
//       accessToken:
//         "pk.eyJ1IjoieW90YW1nNiIsImEiOiJjbDNqN25zcjYwNWRvM3FxcmVkcnAxems0In0.8Q8VNa8KUpT_H9Tmtu38Kw",
//       center: [35.217018, 31.771959], // starting position [lng, lat]
//       zoom: 17, // starting zoom
//       style: "mapbox://styles/mapbox/streets-v11",
//       container: "map", // container ID
//     });
//     map.addControl(geocoder);
//   }, []);

//   const MapBox = ReactMapboxGl({
//     accessToken:
//       "pk.eyJ1IjoieW90YW1nNiIsImEiOiJjbDNqN25zcjYwNWRvM3FxcmVkcnAxems0In0.8Q8VNa8KUpT_H9Tmtu38Kw",
//   });
//   MapBox.addControl(geocoder);

// {
/* <MapBox
        style="mapbox://styles/mapbox/streets-v9"
        center={[35.217018, 31.771959]}
        zoom={[7]}
        containerStyle={{
          height: "100vh",
          width: "100vw",
          geocoder,
        }} */
// }
// {
/* > */
// }
// {
/* <Geocoder
          mapboxApiAccessToken='"pk.eyJ1IjoieW90YW1nNiIsImEiOiJjbDNqN25zcjYwNWRvM3FxcmVkcnAxems0In0.8Q8VNa8KUpT_H9Tmtu38Kw"'
          mapRef={mapRef}
        ></Geocoder> */
// }
// {
/* <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[0, 0]} />
        </Layer> */
// }
// {
/* </MapBox> */

//   const coordinatesGeocoder = function (query) {
// Match anything which looks like
// decimal degrees coordinate pair.
// const matches = query.match(
//   /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
// );
// console.log(matches);
// if (!matches) {
//   return null;
// }
// function coordinateFeature(lng, lat) {
//   return {
//     center: [lng, lat],
//     geometry: {
//       type: "Point",
//       coordinates: [lng, lat],
//     },
//     place_name: "Lat: " + lat + " Lng: " + lng,
//     place_type: ["coordinate"],
//     properties: {},
//     type: "Feature",
//   };
// }
// const coord1 = Number(matches[1]);
// const coord2 = Number(matches[2]);
// const geocodes = [];
// if (coord1 < -90 || coord1 > 90) {
//   // must be lng, lat
//   geocodes.push(coordinateFeature(coord1, coord2));
// }
// if (coord2 < -90 || coord2 > 90) {
//   // must be lat, lng
//   geocodes.push(coordinateFeature(coord2, coord1));
// }
// if (geocodes.length === 0) {
//   // else could be either lng, lat or lat, lng
//   geocodes.push(coordinateFeature(coord1, coord2));
//   geocodes.push(coordinateFeature(coord2, coord1));
// }
// return geocodes;

// map.current.addControl(
//   new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     // localGeocoder: coordinatesGeocoder,
//     zoom: 4,
//     placeholder: "Try: -40, 170",
//     // mapboxgl: mapboxgl,
//     // reverseGeocode: true,
//   })
// );
//   };
// }
