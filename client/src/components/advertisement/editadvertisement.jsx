import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './advertisementform.scss';
import "../../pages/advertisement/advertisementpage.scss"

const EditAdvertisement = ({ adId }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/server/ads/advertisements/${adId}`)
      .then((response) => {
        const adData = response.data;
        setTitle(adData.title);
        setDescription(adData.description);
        setDetails(adData.details);
      })
      .catch((error) => {
        console.error('Error fetching advertisement data:', error);
      });
  }, [adId]);
  

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const updatedAdvertisement = { adId, title, description, details };
    
    axios
      .put(`http://localhost:8000/server/ads/advertisements/${adId}`, updatedAdvertisement)
      .then((response) => {
        console.log("Advertisement updated successfully:", response.data);
        /* refresh the page */
        // window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating advertisement:", error);
      });
  };
  

  return (
    <div className='modify-advertisement'>
      <h2>Update Advertisement</h2>
      <form className='adv-form' onSubmit={handleSubmit}>
        <div className='adv-field'>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" maxLength="35" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='adv-field'>
          <label htmlFor="description">Description:</label>
          <textarea id="description" rows="10" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='adv-field'>
          <label htmlFor="details">Details:</label>
          <textarea id="details" rows="5" value={details} onChange={(e) => setDetails(e.target.value)} />
        </div>
        <button className='btn-adv-submit' type="submit">Update Advertisement</button>
      </form>
    </div>
  );
};

export default EditAdvertisement;
