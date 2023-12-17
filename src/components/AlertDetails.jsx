import React, { useState, useEffect } from "react";
import AlertData from "../data/AlertData";
import { IoMdNotifications } from "react-icons/io";

function YourComponent({
  SearchText = "",
  SearchLastData = "",
  SearchStartDate = "",
  SearchVehicle = "",
}) {
  console.log(SearchVehicle);
  const [data, setData] = useState(AlertData);

  useEffect(() => {
    let filteredData = [];
    if (SearchText) {
      const lowerCaseSearchText = SearchText.toLowerCase();

      filteredData = AlertData.filter((obj) => {
        return Object.values(obj).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(lowerCaseSearchText)
        );
      });

      setData(filteredData);
    }
  }, [SearchText, SearchVehicle]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);

    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const formattedDateTime = new Intl.DateTimeFormat("en-US", options).format(
      date
    );

    return formattedDateTime;
  };

  if (data.length === 0) {
    return null;
  }

  return (
    <div>
      {data.length &&
        data.map((alert) => (
          <div
            className="w-full flex text-black bg-white py-2 px-4 md:px-8 lg:px-12 items-center text-lg rounded-md border-t border-gray-900"
            key={alert.id}
          >
            <div className="w-full md:w-2/3 lg:w-2/3">
              <div className="flex items-start flex-col md:flex-row lg:flex-row">
                <span className="ml-2 md:mr-6 font-medium mb-2 md:mb-0 lg:mb-0">
                  {alert.alert_type}
                </span>
                <ul className="list-disc mb-2 md:mb-0 lg:mb-0 md:ml-6 lg:ml-6">
                  <li className="text-sm">
                    {formatTimestamp(alert.timestamp)}
                  </li>
                </ul>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row items-start">
                <div className="text-lg mx-2 md:mx-0 lg:mx-0 font-medium mb-2 md:mb-0 lg:mb-0">
                  Driver:
                </div>
                <div className="flex items-center">
                  <div className="mx-1 mb-2 md:mb-0 lg:mb-0">
                    {alert.driver_friendly_name} /
                  </div>
                  <div className="mx-1">{alert.vehicle_friendly_name}</div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/3 flex mt-2 md:mt-0 lg:mt-0">
              <div className="w-56 h-12 flex items-center justify-center rounded-md ml-auto">
                <IoMdNotifications size={24} />
                <span className="ml-2">Marked as false Alarm</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default YourComponent;
