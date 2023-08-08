import React, { useState } from "react";
import Close from "../../assets/close.png";
import "./closePost.scss";
import Line from "../../assets/Line1.png";


const ClosePost = ({ toggleExploreBarVisibility, togglePostDiscardVisibility }) => {
    return (
        <div className="closePost">
            <div className="content">
                <div className="upper">
                    <h3>Discard Post</h3>
                    <img className="close" src={Close} alt="" onClick={togglePostDiscardVisibility} />
                </div>
                <img className="line" src={Line} alt="" />
                <div className="middle">
                    <p>This Post Will Be Discarded. Do you want to Exit?</p>
                </div>
                <div className="lower">
                    <button className="discard" onClick={() => {
                        togglePostDiscardVisibility();
                        toggleExploreBarVisibility();
                    }}>Discard</button>
                    <button className="keep" onClick={togglePostDiscardVisibility}>Continue Editing</button>
                </div>
            </div>
        </div>
    );
};

export default ClosePost;