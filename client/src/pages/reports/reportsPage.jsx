import React from "react";
// import "./dashboardPage.scss";
import Hotel from "../../components/hotel/hotel";
import Advertisements from "../../components/advertisement/advertisement";
import DashboardOverview from "../../components/dashboard/dashboardOverview";
import Reports from "../../components/reports/reports";

export const ReportsPage = () => {
  return (
    <div className="outer-space">
      <div className="mid-page">
        <Reports />
      </div>
    </div>
  );
};

export default ReportsPage;
