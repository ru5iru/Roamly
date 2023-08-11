import React from 'react';

const AdvertisementItem = ({ advertisement }) => {
  const { title, description, ad_media, start_date, end_date } = advertisement;

  return (
    <div className="advertisement-item">
      <h2>{title}</h2>
      <div>
        <img src={ad_media} alt="Advertisement" />
      </div>
      <p>{description}</p>
      <p>
        <strong>Start Date:</strong> {new Date(start_date).toLocaleDateString()}
      </p>
      <p>
        <strong>End Date:</strong> {new Date(end_date).toLocaleDateString()}
      </p>
      {/* Display other details from the advertisement as needed */}
    </div>
  );
};

export default AdvertisementItem;
