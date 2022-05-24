import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import React, { useState, useEffect, useContext } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { TextField, Box } from "@mui/material";

const Map = () => {
  const [lng, setLng] = useState();
  const [lat, setLat] = useState();
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const MapBox = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoieW90YW1nNiIsImEiOiJjbDNqN25zcjYwNWRvM3FxcmVkcnAxems0In0.8Q8VNa8KUpT_H9Tmtu38Kw",
  });
  return (
    <>
      <MapBox
        style="mapbox://styles/mapbox/streets-v9"
        center={[35.217018, 31.771959]}
        zoom={[7]}
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            backgroundColor: "#F0FFFF",
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="filled-basic"
              onChange={handleChange}
              label="number of rooms"
              variant="filled"
            ></TextField>
          </div>
        </Box>
        {/* <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[0, 0]} />
        </Layer> */}
      </MapBox>
    </>
  );
};
export default Map;
