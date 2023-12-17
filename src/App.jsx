import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import AlertDetails from "./components/AlertDetails";
import DateRange from "./components/DateRange";
import Vehical from "./components/Vehical";

function App() {
  const [freeSearch, setFreeSearch] = useState(null);
  const [vehicleNumber, setVehicleNumber] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleFreeSearch = (value) => {
    setFreeSearch(value);
  };

  const handleVehicleNumber = (value) => {
    setVehicleNumber(value);
  };

  const handleStartDate = (value) => {
    setStartDate(value);
  };

  const handleEndDate = (value) => {
    setEndDate(value);
  };

  return (
    <div className="bg-slate-200 min-h-screen p-2 md:p-4 lg:p-8">
      <div className="flex flex-col md:flex-row lg:flex-row">
        <Search onChangeSearch={handleFreeSearch} />
        <Vehical onChangeVehicleNumber={handleVehicleNumber} />
        <DateRange
          onChangestartDate={handleStartDate}
          onChangeEndDate={handleEndDate}
        />
      </div>
      <div className="mt-2 md:mt-2 lg:mt-6">
        <h1 className="text-black font-medium bg-white w-full h-[3rem] py-2 px-5 flex items-center text-lg rounded-md">
          Alert
        </h1>
        <AlertDetails
          SearchText={freeSearch}
          SearchVehicle={vehicleNumber}
          SearchStartDate={startDate}
          SearchLastData={endDate}
        />
      </div>
    </div>
  );
}

export default App;
