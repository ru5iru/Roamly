import React from "react";
import { useNavigate } from "react-router-dom";
import "./ExploreTopBar.scss";
import Home from "../../assets/Home.png";
import Plan from "../../assets/plan.png";
import Messages from "../../assets/messages.png";
import Search from "../../assets/Search_black.png";
import Profile from "../../assets/profile_pic.png";

const ExploreTopBar = () => {


    return (
        <div className="leftBar">

            <div className="filterbar">
                <div className="filterbar_items">
                    <div className="menu_item_h">
                        <img src={Home} alt="" />
                        <p>Posts</p>
                    </div>
                    <div className="menu_item_h">
                        <img src={Search} alt="" />
                        <p>People</p>
                    </div>
                    <div className="menu_item_h">
                        <img src={Plan} alt="" />
                        <p>Photos</p>
                    </div>
                    <div className="menu_item_h">
                        <img src={Plan} alt="" />
                        <p>Videos</p>
                    </div>
                    <div className="menu_item_h">
                        <img src={Messages} alt="" />
                        <p>Places</p>
                    </div>


                </div>


            </div>



        </div >



    );
};

export default ExploreTopBar;
