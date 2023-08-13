import React, { useState } from "react";
import "./advertisementpage.scss";
import Advertisement from "../../components/advertisement/advertisement";
import "../../components/advertisement/advertisement.scss";
import Addbutton from "./addbutton";
import hotelimg from "../../assets/images/hotelimg.png";
import hotelpro from "../../assets/images/hotelpro.jpg";
// import ViewButton from "../../components/advertisement/viewbutton";
import { IoOptions } from "react-icons/io5";
import LeftBar from "../../components/leftBar/LeftBar";
import Filter from "../../components/filter/filter";

export const AdvertisementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="hotel-profile">
      <div className="right">
        <div className="hotel-image">
          <img className="hotel-cover" src={hotelimg} alt="hotel" />
          <img
            className="hotel-profile-pic"
            src={hotelpro}
            alt="hotel-profile"
          />
        </div>
        <div className="add-ad">
          <div className="filter">
            <IoOptions title="Filter" onClick={handleButtonClick} />
            {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="close-button" onClick={closeModal}>
              <span>&times;</span>
            </div>
            <Filter />
          </div>
        </div>
      )}
          </div>
          <Addbutton />
        </div>
        <div className="content">
          <Advertisement />
          {/* <Advertisement /> */}
        </div>
      </div>
    </div>
  );
};

export default AdvertisementPage;
