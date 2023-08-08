import React from "react";
import "./hotelpage.scss";
import Hotel from "../../components/hotel/hotel";
import Advertisements from "../../components/advertisement/advertisement";

export const HotelPage = () => {
  return (
    <div className="outer-space">
      <div className="outer-left-page">
        sidebar
      </div>
      <div className="mid-page">
        <h1>Hotels near Belihuloya</h1>
        <Hotel />
        <Hotel />
        <Hotel />
      </div>
      <div className="outer-right-page">
        <Advertisements />
      </div>
    </div>
  );
};

export default HotelPage;
