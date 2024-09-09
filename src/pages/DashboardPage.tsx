import React from "react";
import Map from "../components/Map";
import LineChart from "../components/LineChart";

const DashboardPage = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
        <div>
          <Map />
        </div>
        <div>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
