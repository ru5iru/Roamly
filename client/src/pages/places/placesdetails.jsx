import React from "react";
import "./placesdetails.scss";
import HotelService from "../../components/service/hotelservice";
import ShopService from "../../components/service/shopservice";
import Taxiservice from "../../components/service/taxiservice";
import Guideservice from "../../components/service/guideservice";
import Advertisements from "../../components/advertisement/advertisement";

export const Placesdetails = () => {
  return (
    <div className="outer-space">
      <div className="outer-left">
        sidebar
      </div>
      <div className="mid">
        <h2>Find in Belihuloya</h2>
        <div className="services">
          <HotelService />
          <ShopService />
          <Taxiservice />
          <Guideservice />
        </div>
      </div>
      <div className="outer-right">
        <Advertisements />
        <Advertisements />
      </div>
    </div>
  );
};

export default Placesdetails;