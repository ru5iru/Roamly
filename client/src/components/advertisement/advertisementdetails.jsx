import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AdvertisementDetails = () => {
  const { adId } = useParams();
  const [advertisement, setAdvertisement] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/advertisements/${adId}`)
      .then((response) => {
        setAdvertisement(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [adId]);

  if (!advertisement) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{advertisement.title}</h2>
      <p>Start Date: {new Date(advertisement.start_date).toLocaleDateString("en-US")}</p>
      <p>End Date: {new Date(advertisement.end_date).toLocaleDateString("en-US")}</p>
      {/* Additional advertisement details */}
    </div>
  );
};

export default AdvertisementDetails;
