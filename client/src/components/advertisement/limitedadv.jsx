import React, { useState, useEffect } from "react";
import axios from "axios";
import ViewAdd from "./viewad"; // Import the correct path for ViewAdd
import hotelAd3 from "../../assets/images/hotel-ad-2.jpg";
import "./advertisement.scss";
import LimitedViewAdd from "./limitedviewadv";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const LimitedAdvertisement = () => {
  const [advertisementData, setAdvertisements] = useState([]);
  const [selectedAdvertisement, setSelectedAdvertisement] = useState(null);
  const [visibleAds, setVisibleAds] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  useEffect(() => {
    shuffleAndSetVisibleAds();
  }, [advertisementData]);

  const shuffleAndSetVisibleAds = () => {
    const shuffledAds = shuffleArray(advertisementData);
    setVisibleAds(shuffledAds.slice(0, 3));
  };

  const handleAdvertisementClick = (ad) => {
    setSelectedAdvertisement(ad);
    setIsModalOpen(true);
  };

  const closeModal = (event) => {
    event.stopPropagation();
    setSelectedAdvertisement(null);
    setIsModalOpen(false);
  };

  // Fisher-Yates Shuffle Algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="advertisement-container">
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="close-button" onClick={closeModal}>
              <span>&times;</span>
            </div>
            <LimitedViewAdd advertisement={selectedAdvertisement} />
          </div>
        </div>
      )}
      {visibleAds.map((ad) => (
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
            <h5 className="ad-type">{ad.service_type}</h5>
            <h5 className="ad-number"><PhoneInTalkIcon />012-3456789</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LimitedAdvertisement;
