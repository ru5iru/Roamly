import React, { useState, useContext } from "react";
import "./headerTravel.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import logowb from "../../assets/images/logowb.png";
import Home from "../../assets/Home.png";
import Plan from "../../assets/plan.png";
import Messages from "../../assets/messages.png";
import Search from "../../assets/Search_black.png";
import Notification from "../../assets/Notification.png"
import { FaBell } from "react-icons/fa6";
// import bars from '../../assets/icons/bars-icon2.png'

export const HeaderService = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const { currentUser } = useContext(AuthContext);

  // const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/dashboard");
  };

  const handleProfileClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/hotelprofile/" + currentUser.user_id);
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
  const handleNotificationClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/notification/");
};
  return (
    <section className="headerth">
      <div className={`containerth ${sidebarOpen ? "sidebar-openth" : ""}`}>
        <div className={`sidebarth ${sidebarOpen ? "" : "hiddenth"}`}>
          <div className="menuth">
            <div className="menu_itemth" onClick={handleDashboardClick}>
              <img src={Home} alt="" />
              <p>Dashboard</p>
            </div>
            <div className="menu_itemth" onClick={handleProfileClick}>
              <img src={currentUser.profile_pic} className="usr_picth" alt="" />
              <p>
                {currentUser.firstname} {currentUser.lastname}
              </p>
            </div>
            <div className="menu_itemth" onClick={handleAdsClick}>
              <img src={Search} alt="" />
              <p>Advertisements</p>
            </div>
            <div className="menu_itemth" onClick={handleReportsClick}>
              <img src={Plan} alt="" />
              <p>Reports</p>
            </div>
            <div className="menu_itemth" onClick={handleMessagesClick}>
              <img src={Messages} alt="" />
              <p>Messages</p>
            </div>
          </div>
        </div>
      </div>
      <div className="toggleth">
        <div className="toggle-buttonth" onClick={toggleSidebar}>
          <span className="iconth">{sidebarOpen ? "✕" : "☰"}</span>
        </div>
      </div>
      <div className="logoth">
        <img src={logowb} className="logowth" alt="" />
      </div>
      <div className="buttonth">
        <div className="loginth">
          <a style={{ textDecoration: "none", color: "#ffffff", fontsize: "25px" }} onClick={handleNotificationClick}>
          <FaBell />
          </a>
          &nbsp;&nbsp;
          <a href="/logout" style={{ textDecoration: "none" }}>
            <button type="submit" className="button1th">
              LOGOUT
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeaderService;