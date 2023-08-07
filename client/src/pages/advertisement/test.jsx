import React from "react";
import "./advertisementpage.scss";
import Advertisement from "../../components/advertisement/advertisement";
import "../../components/advertisement/advertisement.scss";
import Addbutton from "./addbutton";
import hotelimg from "../../assets/images/hotelimg.png";
import hotelpro from "../../assets/images/hotelpro.jpg";

export const Test = () => {
  
  return (
    <div className="hotel-profile">
      <div className="left">sidebar</div>
      <div className="right">
        <div className="hotel-image">
          <img className="hotel-cover" src={hotelimg} alt="hotel" />
          <img className="hotel-profile" src={hotelpro} alt="hotel-profile" />
        </div>
        <div className="add-ad">
            <Addbutton />
        </div>
        <div className="content">
          <Advertisement />
        </div>
      </div>
    </div>
  );
};

export default Test;
