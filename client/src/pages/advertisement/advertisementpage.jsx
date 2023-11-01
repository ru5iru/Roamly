import React, { useState, useEffect } from "react";
import "./advertisementpage.scss";
import "../../components/advertisement/advertisement.scss";
import Advertisement from "../../components/advertisement/advertisement";
import Addbutton from "./addbutton";
// import ViewButton from "../../components/advertisement/viewbutton";
import { IoOptions } from "react-icons/io5";
import Filter from "../../components/filter/filter";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Notification from "../notification/notification";

export const AdvertisementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/images")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  const navigate = useNavigate(); // Initialize useNavigate

  const handleApprovalButtonClick = () => {
    navigate("/advertisements/payments");
  };

  return (
    <div className="hotel-profile">
      <div className="right">
        <div>
          <div>
            <ul>
              {images.map((image, index) => (
                <li key={index}>
                  <img src={image.image} alt={`Image ${index}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="add-ad">
          <Notification />
          <Addbutton />
        </div>
        <div className="content">
          <Advertisement />
        </div>
      </div>
    </div>
  );
};

export default AdvertisementPage;
