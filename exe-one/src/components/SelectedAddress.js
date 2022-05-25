import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { AppContext } from "../App";

const SelectedAddress = () => {
  const { selectedAddress } = useContext(AppContext);
  return (
    <>
      <img
        src="/logo-propdo.jpeg"
        style={{
          height: "70px",
          width: "100px",
          margin: "10px",
        }}
      />
      <Grid
        alignItems="center"
        justifyContent="space-around"
        container
        sx={{ m: 1 }}
      >
        {selectedAddress ? (
          <Card
            sx={{
              width: "400px",
              backgroundColor: "rgb(162, 217, 206)",
              textAlign: "center",
            }}
          >
            <img
              src={`/Images/prop${Math.floor(Math.random() * 5 + 1)}.jpg`}
              style={{ height: "200px", width: "400px" }}
            />
            <CardContent>
              <Typography sx={{ fontSize: 40 }} color="text.secondary">
                Address:
                <br />
                {selectedAddress[0].address}
              </Typography>
              <Typography variant="h6" component="div">
                Asking Price:
                <br />
                {selectedAddress[0].price}
              </Typography>
              <Typography variant="h6" component="div">
                Square Meters:
                <br />
                {selectedAddress[0].sqm}
              </Typography>
              <Typography variant="h6" component="div">
                Number of rooms:
                <br />
                {selectedAddress[0].num_rooms}
              </Typography>
              <Typography variant="h6" component="div">
                Floor:
                <br />
                {selectedAddress[0].floor}
              </Typography>
              <Typography variant="h6" component="div">
                Number of floors:
                <br />
                {selectedAddress[0].num_floors}
              </Typography>
              <Typography variant="h6" component="div">
                Parking:
                <br />
                {selectedAddress[0].parking}
              </Typography>
              {selectedAddress[0].elevator ? (
                <Typography variant="h6" component="div">
                  Elevator:
                  <br />
                  {selectedAddress[0].elevator}
                </Typography>
              ) : null}
            </CardContent>
            <Button variant="contained" component={Link} to="/real-estate">
              Back to main page
            </Button>
          </Card>
        ) : null}
      </Grid>
    </>
  );
};

export default SelectedAddress;
