// 
import React from "react";
import "./ExploreTopBar.scss";

const ExploreTopBar = ({ onActiveStepChange, activeStep }) => {

    const handleMenuItemClick = (step) => {
        onActiveStepChange(step);
    };

    return (
        <div className="leftBar">
            <div className="filterbar">
                <div className="filterbar_items">
                    <div className={`menu_item_h ${activeStep === 1 ? "active" : ""}`} onClick={() => handleMenuItemClick(1)}>
                        <p>Posts</p>
                    </div>
                    <div className={`menu_item_h ${activeStep === 2 ? "active" : ""}`} onClick={() => handleMenuItemClick(2)}>
                        <p>People</p>
                    </div>
                    <div className={`menu_item_h ${activeStep === 3 ? "active" : ""}`} onClick={() => handleMenuItemClick(3)}>
                        <p>Photos</p>
                    </div>
                    <div className={`menu_item_h ${activeStep === 4 ? "active" : ""}`} onClick={() => handleMenuItemClick(4)}>
                        <p>Videos</p>
                    </div>
                    <div className={`menu_item_h ${activeStep === 5 ? "active" : ""}`} onClick={() => handleMenuItemClick(5)}>
                        <p>Places</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreTopBar;
