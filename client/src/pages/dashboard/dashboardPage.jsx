import React from "react";
import "./dashboardPage.scss";
import Hotel from "../../components/hotel/hotel";
import Advertisements from "../../components/advertisement/advertisement";
import DashboardOverview from "../../components/dashboard/dashboardOverview";

export const DashBoardPage = () => {
  return (
    <div className="outer-space">
      <div className="mid-page">
        <DashboardOverview />
      </div>
    </div>
  );
};

export default DashBoardPage;
