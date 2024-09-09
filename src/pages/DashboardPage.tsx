import React from "react";
import Map from "../components/Map";
import LineChart from "../components/LineChart";

const DashboardPage = () => {
  return (
    <div className="h-screen">
      <div>DashboardPage</div>
      <div className="grid grid-cols-2">
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
