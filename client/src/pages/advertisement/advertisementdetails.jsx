import React from "react";

export const AdvertisementDetails = ({ advertisementDataItem, onClose }) => {
  return (
    <div className="advertisement-details">
      <h3>{advertisementDataItem.title}</h3>
      {/* Add any other information or content you want to display in the pop-up */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AdvertisementDetails;