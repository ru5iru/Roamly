import React, { useState } from "react";
import axios from "axios";

import "./advertisementform.scss";

const AdvertisementForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [ad_media, setAdMedia] = useState('');
  // const [service_type, setServiceType] = useState('');
  const [details, setDetails] = useState("");

  // const handleAdMediaChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => {
  //       // Store the base64 encoded string of the file in the state
  //       setAdMedia(reader.result);
  //     };
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send advertisement data to the back-end for adding/updating
    const newAdvertisement = { title, description, details };
    axios
      .post("http://localhost:8000/server/ads/advertisements", newAdvertisement)
      .then((response) => {
        console.log("Advertisement added successfully:", response.data);
        // Clear the form fields after successful submission
        // setServiceType('');
        setTitle("");
        setDescription("");
        // setAdMedia('');
        setDetails("");
      })
      .catch((error) => {
        console.error("Error adding advertisement:", error);
      });
  };

  return (
    <div className="modify-advertisement">
      <h2>Add Advertisement</h2>
      <form className="adv-form" onSubmit={handleSubmit}>
        {/* <div className='adv-field'>
          <label htmlFor="service_type">Service Type:</label>
          <select id="service_type" value={service_type} onChange={(e) => setServiceType(e.target.value)}>
            <option value="hotel">Hotel</option>
            <option value="shop">Shop</option>
            <option value="taxidriver">Taxi Driver</option>
            <option value="tourguide">Tour Guide</option>
          </select>
        </div> */}
        <div className="adv-field">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            maxLength="35"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="adv-field">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            rows="12"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="adv-field">
          <label htmlFor="details">Details:</label>
          <textarea
            id="details"
            rows="5"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        {/* <div>
          <label htmlFor="ad_media">Ad Media File:</label>
          <input type="file" id="ad_media" onChange={handleAdMediaChange} />
        </div> */}

        <button className="btn-adv-submit" type="submit">
          Add Advertisement
        </button>
      </form>
    </div>
  );
};

export default AdvertisementForm;