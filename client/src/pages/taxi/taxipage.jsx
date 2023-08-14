import React from "react";
import "./taxipage.scss";
import TaxiCard from "../../components/taxi/taxi";

export const TaxiPage = () => {
  return (
    <div className="outer-space">
      
      <div className="mid-page">
        <h1>Taxis near Belihuloya</h1>
        <TaxiCard />
      </div>
      
    </div>
  );
};

export default TaxiPage;
