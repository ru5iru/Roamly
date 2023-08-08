import React, { useState } from "react";
import Done from "../../assets/done.png";
import Line from "../../assets/Line1.png";
import "./postDone.scss";

const PostDone = ({ togglePostDoneVisibility }) => {
    return (
        <div className="postDone">
            <div className="content">
                <div className="upper">
                    <h3>Post Shared</h3>
                </div>
                <img className="line" src={Line} alt="" />
                <div className="middle">
                    <img className="done" src={Done} alt="" />
                    {/* <p>Your post has been created successfully.</p> */}
                </div>
                <div className="lower">
                    <button className="ok" onClick={togglePostDoneVisibility}>OK</button>
                </div>
            </div>
        </div>
    );
};

export default PostDone;
