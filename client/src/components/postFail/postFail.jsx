import React, { useState } from "react";
import Fail from "../../assets/failr.png";
import Line from "../../assets/Line1.png";
import "./postFail.scss";
import "../postDone/postDone.scss";

const PostFail = ({ togglePostFailVisibility, toggleExploreBarVisibility }) => {
    return (
        <div className="postDone">
            <div className="content">
                <div className="upper">
                    <h3>Something Went Wrong</h3>
                </div>
                <img className="line" src={Line} alt="" />
                <div className="middle">
                    <img className="done" src={Fail} alt="" />
                    {/* <p>Your post has been created successfully.</p> */}
                </div>
                <div className="lower">
                    <button className="discard" onClick={() => {
                        togglePostFailVisibility();
                        toggleExploreBarVisibility();
                    }}>Discard</button>
                    <button className="ok" onClick={togglePostFailVisibility}>Continue Editing</button>
                </div>
            </div>
        </div>
    );
};

export default PostFail;
