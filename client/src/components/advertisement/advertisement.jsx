// Advertisement.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./advertisement.scss";

const Advertisement = () => {
  const [advertisementData, setAdvertisements] = useState([]);

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

  return (
    <div>
      {advertisementData.map((ad) => (
        <div className="advertisement">
          <div className="up">
            <img src={advertisementData.ad_media} alt="advertisement" />
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
