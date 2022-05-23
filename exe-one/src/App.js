import "./App.css";
import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import SelectedAddress from "./components/SelectedAddress";
import SelectedRooms from "./components/SelectedRooms";
export const AppContext = createContext(null);
const App = () => {
  const [houseData, setHouseData] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState();
  const [selectedNumOfRooms, setSelectedNumOfRooms] = useState([]);
  return (
    <AppContext.Provider
      value={{
        houseData,
        setHouseData,
        selectedAddress,
        setSelectedAddress,
        selectedNumOfRooms,
        setSelectedNumOfRooms,
      }}
    >
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/real-estate" element={<Main />}></Route>
        <Route path="/selected-address" element={<SelectedAddress />}></Route>
        <Route path="/selected-rooms" element={<SelectedRooms />}></Route>
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
