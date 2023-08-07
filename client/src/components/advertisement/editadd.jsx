import React, { useState, useEffect } from "react";
import axios from "axios";

export const EditAdd = ({ advertisement, onSave }) => {
  const [editedAdvertisement, setEditedAdvertisement] = useState({ ...advertisement });

  // Update the editedAdvertisement state when the advertisement prop changes
  useEffect(() => {
    setEditedAdvertisement({ ...advertisement });
  }, [advertisement]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedAdvertisement((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    axios
      .put(`http://localhost:5000/advertisements/${editedAdvertisement.ad_id}`, editedAdvertisement)
      .then((response) => {
        onSave(editedAdvertisement); // Update the advertisement in the parent component
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Edit Advertisement</h2>
      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={editedAdvertisement.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={editedAdvertisement.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="start_date"
            value={editedAdvertisement.start_date}
            onChange={handleInputChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="end_date"
            value={editedAdvertisement.end_date}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditAdd;
