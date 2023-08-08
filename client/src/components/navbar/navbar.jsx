import React, { useState, useEffect } from "react";
import Chat from "../../assets/images/Chat.png";
import Notification from "../../assets/images/Notification.png";
import Search from "../../assets/images/search.png";
import Profile_pic from "../../assets/images/profile_pic.png";
import logo from "../../assets/images/Roamly.png";
import TripType from "../../pages/triptype/triptype";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    // Clean up popup state when component unmounts
    return () => {
        setIsModalOpen(false);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} alt="" className="logo" />
        <img src={Search} alt="" onClick={handleButtonClick} /> {/* Add onClick event */}
      </div>
      <div className="right">
        <img src={Chat} alt="" />
        <img src={Notification} alt="" />
        <img src={Profile_pic} alt="" />
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="close-button" onClick={closeModal}>
              <span>&times;</span>
            </div>
            <TripType />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
