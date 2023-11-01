import React from "react";
import { useNavigate } from "react-router-dom";
import "./leftBar.scss";
import Home from "../../assets/Home.png";
import Plan from "../../assets/plan.png";
import Messages from "../../assets/messages.png";
import Search from "../../assets/Search_black.png";
import Profile from "../../assets/profile_pic.png";
import Dashboard from "../../assets/images/dashboard.png";
import Ads from "../../assets/images/ads.png";
import axios from "axios";

// import { AuthContext } from "../explore/context/authContext";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useLocation } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  // const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/feed");
  };
  const handleExporeClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/explore");
  };

  const handleProfileClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/profile/" + currentUser.user_id);
  };
  const handlePlanTripClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/trip");
  };
  const handleMessageClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/messages");
  };

  const handleDashClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/dashboard");
  };
  const handleAdsClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/advertisements");
  };
  const handleSpProfileClick = () => {
    // Navigate to the home page when the Home menu item is clicked
    navigate("/hotelProfile");
  };

  return (
    <div className="leftBar">
      {/* <p>{currentUser.user_id}</p>
        <p>User Type: {currentUser.user_type}</p> */}

      {currentUser.user_type === "Traveller" ? (
        <div className="leftbar">
          <div className="menu">
            <div className="menu_item" onClick={handleHomeClick}>
              <img src={Home} alt="" />
              <p>Home</p>
            </div>
            <div className="menu_item" onClick={handleProfileClick}>
              <img src={currentUser.profile_pic} className="usr_pic" alt="" />
              <p>
                {currentUser.firstname} {currentUser.lastname}
              </p>
            </div>
            <div className="menu_item" onClick={handleExporeClick}>
              <img src={Search} alt="" />
              <p>Explore</p>
            </div>
            <div className="menu_item" onClick={handlePlanTripClick}>
              <img src={Plan} alt="" />
              <p>Plan Your Trip</p>
            </div>
            <div className="menu_item" onClick={handleMessageClick}>
              <img src={Messages} alt="" />
              <p>Messages</p>
            </div>
          </div>
        </div>
      ) : currentUser.user_type === "Service" ? (
        <div className="leftbar">
          <div className="menu">
            <div className="menu_item" onClick={handleDashClick}>
              <img src={Dashboard} alt="Dashboard" />
              <p>Dashboard</p>
            </div>
            <div className="menu_item" onClick={handleSpProfileClick}>
              <img src={Profile} alt="Profile" />
              <p>
                {currentUser.firstname} {currentUser.lastname}
              </p>
            </div>
            <div className="menu_item" onClick={handleAdsClick}>
              <img src={Ads} alt="" />
              <p>Advertisements</p>
            </div>
            <div className="menu_item" onClick={handleMessageClick}>
              <img src={Messages} alt="" />
              <p>Messages</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LeftBar;
