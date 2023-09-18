import React, { useState, useContext } from "react";
import "./headerTravel.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import logowb from "../../assets/images/logowb.png";
import Home from "../../assets/Home.png";
import Plan from "../../assets/plan.png";
import Messages from "../../assets/messages.png";
import Search from "../../assets/Search_black.png";
// import bars from '../../assets/icons/bars-icon2.png'

export const HeaderTravel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
    <section className="headerth">
      <div className={`containerth ${sidebarOpen ? "sidebar-openth" : ""}`}>
        <div className={`sidebarth ${sidebarOpen ? "" : "hiddenth"}`}>
          <div className="menuth">
            <div className="menu_itemth" onClick={handleHomeClick}>
              <img src={Home} alt="" />
              <p>Home</p>
            </div>
            <div className="menu_itemth" onClick={handleProfileClick}>
              <img src={currentUser.profile_pic} className="usr_picth" alt="" />
              <p>
                {currentUser.firstname} {currentUser.lastname}
              </p>
            </div>
            <div className="menu_itemth" onClick={handleExporeClick}>
              <img src={Search} alt="" />
              <p>Explore</p>
            </div>
            <div className="menu_itemth" onClick={handlePlanTripClick}>
              <img src={Plan} alt="" />
              <p>Plan Your Trip</p>
            </div>
            <div className="menu_itemth">
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

export default HeaderTravel;