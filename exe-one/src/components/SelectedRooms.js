import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { AppContext } from "../App";
let counter = 0;
const SelectedRooms = () => {
  const { selectedNumOfRooms } = useContext(AppContext);
  const colors = [
    "#FAD089",
    "#FF9C5B",
    "#F5634A",
    "#ED303C",
    "#3B8183",
    "#BCBDAC",
    "#CFBE27",
    "#F27435",
    "#F02475",
    "#3B2D38",
    "#D1E751",
    "#4DBCE9",
    "#26ADE4",
    "#FF9900",
    "#424242",
    "#E9E9E9",
    "#BCBCBC",
    "#3299BB",
    "#5D4157",
    "#838689",
    "#A8CABA",
    "#CAD7B2",
    "#EBE3AA",
  ];
  return (
    <>
      <Grid
        alignItems="center"
        justifyContent="space-around"
        container
        sx={{ m: 1 }}
      >
        <img
          src="/logo-propdo.jpeg"
          style={{
            height: "70px",
            width: "100px",
            margin: "10px",
          }}
        />
        {selectedNumOfRooms.length
          ? selectedNumOfRooms.map((house, index) => {
              counter % 5 === 0 ? (counter = 1) : counter++;
              return house.address ? (
                <Grid key={index} sx={{ m: 1 }}>
                  <Card sx={{ minWidth: 275, backgroundColor: colors[index] }}>
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
        <Button variant="contained" component={Link} to="/real-estate">
          Back to main page
        </Button>
      </Grid>
    </>
  );
};

export default SelectedRooms;
