import React, { useState, useEffect } from "react";
import axios from "axios";
import "./advertisement.scss";
// import AdvertisementForm from "./advertisementform"; // Import your AdvertisementForm component
import EditAdd from "./editadd";

const Advertisement = () => {
  const [advertisementData, setAdvertisements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdvertisement, setSelectedAdvertisement] = useState(null); // New state variable

  useEffect(() => {
    // Fetch advertisements from the back-end
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
    setSelectedAdvertisement(ad); // Set the selectedAdvertisement to the clicked advertisement
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = (event) => {
    event.stopPropagation();
    setSelectedAdvertisement(null); // Clear the selectedAdvertisement when the modal is closed
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
            <EditAdd />            
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
            <p>Start Date: {new Date(ad.start_date).toLocaleDateString()}</p>
            <p>End Date: {new Date(ad.end_date).toLocaleDateString()}</p>
          </div>
          <div className="bottom">
            <p>{ad.title}</p>
            {/* <p>{ad.description}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advertisement;
