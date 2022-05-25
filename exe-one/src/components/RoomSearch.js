import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import { TextField, Box, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RoomSearch = () => {
  const { houseData, setSelectedNumOfRooms } = useContext(AppContext);
  const [value, setValue] = useState("");
  const [numOfRooms, setNumOfRooms] = useState();
  let navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
    const selected = houseData.filter((house) => {
      if (house.address) {
        return house.num_rooms === e.target.value;
      }
    });

    setSelectedNumOfRooms(selected);
    navigate("/selected-rooms");
  };

  useEffect(() => {
    if (houseData.length) {
      const allNumOfRooms = houseData.map((house) => Number(house.num_rooms));
      const sortedNumOfRooms = allNumOfRooms.sort();
      const uniqueNumOfRooms = new Set(sortedNumOfRooms);
      const arrOfNumRooms = [...uniqueNumOfRooms];
      setNumOfRooms(arrOfNumRooms);
    }
  }, [houseData]);
  return (
    <>
      <div>
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
              id="outlined-select"
              select
              value={value}
              onChange={handleChange}
              label="number of rooms"
              helperText="Select a desired number of rooms"
            >
              {numOfRooms ? (
                numOfRooms.map((num, i) => {
                  return (
                    <MenuItem key={i} value={num}>
                      {num}
                    </MenuItem>
                  );
                })
              ) : (
                <MenuItem value={"select"}>{"select"}</MenuItem>
              )}
            </TextField>
          </div>
        </Box>
      </div>
    </>
  );
};

export default RoomSearch;
