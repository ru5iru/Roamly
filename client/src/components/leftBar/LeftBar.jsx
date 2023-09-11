import React from "react";
import { useNavigate } from "react-router-dom";
import "./leftBar.scss";
import Home from "../../assets/Home.png";
import Plan from "../../assets/plan.png";
import Messages from "../../assets/messages.png";
import Search from "../../assets/Search_black.png";
import Profile from "../../assets/profile_pic.png";
// import { AuthContext } from "../explore/context/authContext";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";

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

    return (
            <div className="leftbar-main">
                <div className="menu">
                    <div className="menu_item" onClick={handleHomeClick}>
                        <img src={Home} alt="" />
                        <p>Home</p>
                    </div>
                    <div className="menu_item" onClick={handleProfileClick}>
                        <img src={currentUser.profile_pic} className="usr_pic" alt="" />
                        <p>{currentUser.firstname} {currentUser.lastname}</p>
                    </div>
                    <div className="menu_item" onClick={handleExporeClick}>
                        <img src={Search} alt="" />
                        <p>Explore</p>
                    </div>
                    <div className="menu_item" onClick={handlePlanTripClick}>
                        <img src={Plan} alt="" />
                        <p>Plan Your Trip</p>
                    </div>
                    <div className="menu_item">
                        <img src={Messages} alt="" />
                        <p>Messages</p>
                    </div>
                </div>
            </div>
    );
};

export default LeftBar;
