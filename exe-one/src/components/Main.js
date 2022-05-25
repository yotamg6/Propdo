import React, { useContext } from "react";
import { AppContext } from "../App";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import AddressSearch from "./AddressSearch";
import RoomSearch from "./RoomSearch";
let counter = 0;
const Main = () => {
  const { houseData } = useContext(AppContext);
  const palette = [
    "#69D2E7",
    "#A7DBD8",
    "#E0E4CC",
    "#F38630",
    "#FA6900",
    "#FE4365",
    "#FC9D9A",
    "#F9CDAD",
    "#C8C8A9",
    "#83AF9B",
    "#ECD078",
    "#D95B43",
    "#C02942",
    "#542437",
    "#53777A",
    "#556270",
    "#4ECDC4",
    "#C7F464",
    "#FF6B6B",
    "#C44D58",
    "#774F38",
    "#E08E79",
    "#F1D4AF",
    "#ECE5CE",
    "#C5E0DC",
    "#E8DDCB",
    "#CDB380",
    "#036564",
    "#033649",
    "#031634",
    "#490A3D",
    "#BD1550",
    "#E97F02",
    "#F8CA00",
    "#8A9B0F",
    "#594F4F",
    "#547980",
    "#45ADA8",
    "#9DE0AD",
    "#E5FCC2",
    "#00A0B0",
    "#6A4A3C",
    "#CC333F",
    "#EB6841",
    "#EDC951",
    "#E94E77",
    "#D68189",
    "#C6A49A",
    "#C6E5D9",
    "#F4EAD5",
    "#D9CEB2",
    "#948C75",
    "#D5DED9",
    "#7A6A53",
    "#99B2B7",
    "#FFFFFF",
    "#CBE86B",
    "#F2E9E1",
    "#1C140D",
    "#CBE86B",
  ];

  return (
    <>
      <Grid alignItems="center" justifyContent="center" container sx={{ m: 1 }}>
        <img
          src="/logo-propdo.jpeg"
          style={{
            height: "70px",
            width: "100px",
            margin: "10px",
          }}
        />
        <AddressSearch />
        <RoomSearch />
      </Grid>
      <Grid
        alignItems="center"
        justifyContent="space-around"
        container
        sx={{ m: 1 }}
      >
        {houseData.length
          ? houseData.map((house, index) => {
              counter % 5 === 0 ? (counter = 1) : counter++;
              return house.address ? (
                <Grid key={index} sx={{ m: 1 }}>
                  <Card sx={{ minWidth: 275, backgroundColor: palette[index] }}>
                    <img
                      src={`/Images/prop${counter}.jpg`}
                      style={{ height: "100px", width: "275px" }}
                    />
                    <CardContent>
                      <Typography sx={{ fontSize: 40 }} color="text.secondary">
                        Address:
                        <br />
                        {house.address}
                      </Typography>
                      <Typography variant="h6" component="div">
                        Asking Price:
                        <br />
                        {house.price}
                      </Typography>
                      <Typography variant="h6" component="div">
                        Square Meters:
                        <br />
                        {house.sqm}
                      </Typography>
                      <Typography variant="h6" component="div">
                        Number of rooms:
                        <br />
                        {house.num_rooms}
                      </Typography>
                      <Typography variant="h6" component="div">
                        Floor:
                        <br />
                        {house.floor}
                      </Typography>
                      <Typography variant="h6" component="div">
                        Number of floors:
                        <br />
                        {house.num_floors}
                      </Typography>
                      <Typography variant="h6" component="div">
                        Parking:
                        <br />
                        {house.parking}
                      </Typography>
                      {house.elevator ? (
                        <Typography variant="h6" component="div">
                          Elevator:
                          <br />
                          {house.elevator}
                        </Typography>
                      ) : null}
                    </CardContent>
                  </Card>
                </Grid>
              ) : null;
            })
          : null}
      </Grid>
    </>
  );
};

export default Main;
