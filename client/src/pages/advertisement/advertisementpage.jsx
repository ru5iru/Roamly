import React from "react";
import "./advertisementpage.scss";
import Advertisement from "../../components/advertisement/advertisement";
import "../../components/advertisement/advertisement.scss";
import Addbutton from "./addbutton";
import hotelimg from "../../assets/images/hotelimg.png";
import hotelpro from "../../assets/images/hotelpro.jpg";
// import ViewButton from "../../components/advertisement/viewbutton";
import { IoOptions } from "react-icons/io5";
import LeftBar from "../../components/leftbar/leftbar";

export const AdvertisementPage = () => {
  return (
    <div className="hotel-profile">
      <div className="left">
        <div className="fixed-leftbar">
          <LeftBar />
        </div>
      </div>
      <div className="right">
        <div className="hotel-image">
          <img className="hotel-cover" src={hotelimg} alt="hotel" />
          <img
            className="hotel-profile-pic"
            src={hotelpro}
            alt="hotel-profile"
          />
        </div>
        <div className="add-ad">
          <div className="filter">
            <IoOptions title="Filter" />
          </div>
          <Addbutton />
        </div>
        <div className="content">
          <Advertisement />
          {/* <Advertisement /> */}
        </div>
      </div>
    </div>
  );
};

export default AdvertisementPage;
