import React from "react";
import "./guidepage.scss";
import Shop from "../../components/shop/shop";
import Advertisements from "../../components/advertisement/advertisement";
import Guides from "../../components/guide/guide";

export const GuidePage = () => {
  return (
    <div className="outer-space">
      
      <div className="mid-page">
        <h1>Travel Guides near Belihuloya</h1>
        <Guides />
      </div>
      
    </div>
  );
};

export default GuidePage;
