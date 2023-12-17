import React, { useState } from "react";

function DateRange({ onChangestartDate, onChangeEndDate }) {
  const today = new Date().toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(today);
  const [lastDate, setLastDate] = useState(today);
  const handleStartDate = (event) => {
    setStartDate(event.target.value);
    onChangestartDate(event.target.value);
  };
  const handleEndDate = (event) => {
    setLastDate(event.target.value);
    onChangeEndDate(event.target.value);
  };

  return (
    <div className="flex items-center">
      <input
        type="date"
        className="border-none p-2 text-lg bg-white text-black w-full pl-8 outline-none"
        value={startDate}
        onChange={handleStartDate}
        style={{
          borderTopLeftRadius: "0.375rem",
          borderBottomLeftRadius: "0.375rem",
        }}
      />
      <span className="bg-white text-lg p-2 flex text-center text-black">
        To
      </span>
      <input
        type="date"
        className="border-none p-2 text-lg bg-white text-black w-full pl-8 outline-none"
        value={lastDate}
        onChange={handleEndDate}
        style={{
          borderTopRightRadius: "0.375rem",
          borderBottomRightRadius: "0.375rem",
        }}
      />
    </div>
  );
}

export default DateRange;
