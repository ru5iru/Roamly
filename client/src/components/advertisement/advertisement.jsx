import React, { useState, useEffect } from "react";
import axios from "axios";
import ViewAdd from "./viewad"; // Import the correct path for ViewAdd
import hotelAd3 from "../../assets/images/hotel-ad-2.jpg";
import "./advertisement.scss";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const Advertisement = ({image}) => {
  const [advertisementData, setAdvertisements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdvertisement, setSelectedAdvertisement] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/server/ads/advertisements")
      .then((response) => {
        setAdvertisements(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAdvertisementClick = (ad) => {
    setSelectedAdvertisement(ad);
    setIsModalOpen(true);
  };

  const closeModal = (event) => {
    event.stopPropagation();
    setSelectedAdvertisement(null);
    setIsModalOpen(false);
  };
 
  return (
    <div className="advertisement-container">
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="close-button" onClick={closeModal}>
              <span>&times;</span>
            </div>
            <ViewAdd advertisement={selectedAdvertisement} />
          </div>
        </div>
      )}
      {advertisementData.map((ad) => (
        <div
          className="advertisement"
          key={ad.ad_id}
          onClick={() => handleAdvertisementClick(ad)}
        >
          <div className="up">
            <img src={ad.ad_media} alt="advertisement" />
          </div>
          <div className="bottom">
            <h4 className="ad-title">{ad.title}</h4>
            <h5 className="ad-number"><PhoneInTalkIcon />012-3456789</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advertisement;
