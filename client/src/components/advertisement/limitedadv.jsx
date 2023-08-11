// LimitedAdvertisements.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import LimitedViewAdd from "./limitedviewadv";
import hotelAd3 from "../../assets/images/hotel-ad-3.jpeg";
import "./advertisement.scss";

const LimitedAdvertisements = () => {
  const [advertisementData, setAdvertisements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdvertisement, setSelectedAdvertisement] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/advertisements")
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

  const shuffledAdvertisements = advertisementData.sort(
    () => Math.random() - 0.5
  );
  const displayedAdvertisements = shuffledAdvertisements.slice(0, 4);

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
      {displayedAdvertisements.map((ad) => (
        <div
          className="advertisement"
          key={ad.ad_id}
          onClick={() => handleAdvertisementClick(ad)}
        >
          <div className="up">
            <img src={hotelAd3} alt="advertisement" />
          </div>
          <div className="bottom">
            <h6>{ad.title}</h6>
            <p>
              {new Date(ad.start_date).toLocaleDateString("en-US", {
                month: "numeric",
                day: "numeric",
              })}
              {"  --->  "}
              {new Date(ad.end_date).toLocaleDateString("en-US", {
                month: "numeric",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LimitedAdvertisements;
