import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import transactions from "../transactions.json";
import { AppContext } from "../App";
import { TextField, Box, MenuItem } from "@mui/material";

const AddressSearch = () => {
  const { houseData, setHouseData, setSelectedAddress } =
    useContext(AppContext);
  const [value, setValue] = useState("");
  let navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
    const selected = houseData.filter(
      (house) => house.address === e.target.value
    );

    setSelectedAddress(selected);
    navigate("/selected-address");
  };

  useEffect(() => {
    const getTrans = async () => {
      // const response = await fetch("http://localhost:3000//transactions.json");
      // const trans = await response.json();
      const jsonAdjusted = JSON.parse(transactions.replace(/\bNaN\b/g, "null"));
      const parsed = JSON.parse(JSON.stringify(jsonAdjusted));
      const sortedByPrice = parsed.properties.sort((a, b) => a.price - b.price);
      setHouseData(sortedByPrice);
    };
    getTrans();
  }, []);
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
              label="Address"
              helperText="Select a desired address"
            >
              {houseData.map((house, i) => {
                return house.address ? (
                  <MenuItem key={i} value={house.address}>
                    {house.address}
                  </MenuItem>
                ) : null;
              })}
            </TextField>
          </div>
        </Box>
      </div>
    </>
  );
};
export default AddressSearch;
