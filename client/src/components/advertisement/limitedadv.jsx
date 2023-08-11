// LimitedAdvertisements.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import hotelAd3 from "../../assets/images/hotel-ad-3.jpeg";
import "./advertisement.scss";

const LimitedAdvertisements = () => {
  const [advertisementData, setAdvertisements] = useState([]);

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

  const shuffledAdvertisements = advertisementData.sort(() => Math.random() - 0.5);
  const displayedAdvertisements = shuffledAdvertisements.slice(0, 4);

  return (
    <div className="advertisement-container">
      {displayedAdvertisements.map((ad) => (
        <Link
          to={`/advertisement/${ad.ad_id}`}
          className="advertisement"
          key={ad.ad_id}
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
              })}{"  --->  "}
              {new Date(ad.end_date).toLocaleDateString("en-US", {
                month: "numeric",
                day: "numeric",
              })}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LimitedAdvertisements;
