import React from "react";
import "./Actions.scss";
import Profile from "../../assets/profile_pic.png";
import Photo from "../../assets/Image.png";
import Video from "../../assets/video.png";
import Plan from "../../assets/Flag.png";
import Plus from "../../assets/Plus.png";
import Line from "../../assets/Line1.png";

const Actions = ({ toggleExploreBarVisibility }) => {
    return (
        <div className="actions">
            <div className="upper">
                <div className="left">
                    <img src={Profile} alt="" />
                    <p>What is on your mind? </p>
                </div>
                <div className="right">
                    <button onClick={toggleExploreBarVisibility}>
                        <img src={Plus} alt=" " />
                    </button>
                </div>
            </div>
            <div className="middle">
                <img src={Line} alt="" />
            </div>
            <div className="lower">
                <div className="action">
                    <img src={Photo} alt="" />
                    <p>Photo</p>
                </div>
                <div className="action">
                    <img src={Video} alt="" />
                    <p>Video</p>
                </div>
                <div className="action">
                    <img src={Plan} alt="" />
                    <p>Plan</p>
                </div>
                <div className="action_btn">
                    <button onClick={toggleExploreBarVisibility}>
                        <img src={Plus} alt=" " />Explore
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Actions;
