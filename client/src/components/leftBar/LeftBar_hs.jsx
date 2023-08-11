import React from "react";
import { useNavigate } from "react-router-dom";
import "./leftBar.scss";
import Home from "../../assets/Home.png";
import Plan from "../../assets/plan.png";
import Messages from "../../assets/messages.png";
import Search from "../../assets/Search_black.png";
import Profile from "../../assets/profile_pic.png";

const LeftBarhs = () => {

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


    return (
        <div className="leftBar">

            <div className="hidden_leftbar">
                <div className="menu_item_h" onClick={handleHomeClick}>
                    <img src={Home} alt="" />
                    <p>Home</p>
                </div>
                <div className="menu_item_h">
                    <img src={Search} alt="" onClick={handleExporeClick} />
                    <p>Explore</p>
                </div>
                <div className="menu_item_h">
                    <img src={Plan} alt="" />
                    <p>Plan</p>
                </div>
                <div className="menu_item_h">
                    <img src={Messages} alt="" />
                    <p>Messages</p>
                </div>

            </div>

            <div className="hidden_leftbar_s">
                <div className="menu_item_h" onClick={handleHomeClick}>
                    <img src={Home} alt="" />
                </div>
                <div className="menu_item_h" onClick={handleExporeClick}>
                    <img src={Search} alt="" />
                </div>
                <div className="menu_item_h">
                    <img src={Plan} alt="" />
                </div>
                <div className="menu_item_h">
                    <img src={Messages} alt="" />
                </div>

            </div>

        </div>



    );
};

export default LeftBarhs;
