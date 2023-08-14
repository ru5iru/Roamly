import React from "react";
import { useNavigate } from "react-router-dom";
import "./leftBarSp.scss";
import Messages from "../../../assets/messages.png";
import Search from "../../../assets/Search_black.png";
import Profile from "../../../assets/profile_pic.png";
import Badge from "../../../assets/images/badges.png";
import Ads from "../../../assets/images/ads.png";
import Reports from "../../../assets/images/reports.png"
import Dashboard from "../../../assets/images/dashboard.png"
import { AuthContext } from "../../../context/authContext";
import { useContext } from "react";

const LeftBarSp = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDashClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/dashboard");
  };
  const handleProfileClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/profile/" + currentUser.user_id);
};
  const handleAdsClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/advertisements");
  };
  const handleReportsClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/reports");
  };
  const handleMessagesClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/messages");
  };

  return (
    <div className="leftBar">
      <div className="leftbar">
        <div className="menu">
          <div className="menu_item" onClick={handleDashClick}>
            <img src={Dashboard} alt="Dashboard" />
            <p>Dashboard</p>
          </div>
          <div className="menu_item" onClick={handleProfileClick}>
            <img src={Profile} alt="" />
            <p>Profile</p>
          </div>
          <div className="menu_item" onClick={handleAdsClick}>
            <img src={Ads} alt="" />
            <p>Advertisements</p>
          </div>
          {/* <div className="menu_item" onClick={handleReportsClick}>
          <img src={Reports} alt="Reports" />
            <p>Reports</p>
          </div> */}
          <div className="menu_item" onClick={handleMessagesClick}>
            <img src={Messages} alt="" />
            <p>Messages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBarSp;
