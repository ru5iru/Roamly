import React, { useState } from "react";
import axios from "axios";

import "./advertisementform.scss";

const AdvertisementForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAdvertisement = { service_type, title, description, details };
    axios
      .post("http://localhost:8000/server/ads/advertisements", newAdvertisement)
      .then((response) => {
        setTitle("");
        setDescription("");
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

        <button className="btn-adv-submit" type="submit">
          Add Advertisement
        </button>
      </form>
    </div>
  );
};

export default AdvertisementForm;
