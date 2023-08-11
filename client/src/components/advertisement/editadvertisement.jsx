import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './advertisementform.scss';

const EditAdvertisement = ({ adId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/advertisements/${adId}`)
      .then((response) => {
        const adData = response.data;
        setTitle(adData.title);
        setDescription(adData.description);
        setStartDate(adData.start_date.substring(0, 10)); // Extract yyyy-MM-dd
        setEndDate(adData.end_date.substring(0, 10)); // Extract yyyy-MM-dd
      })
      .catch((error) => {
        console.error('Error fetching advertisement data:', error);
      });
  }, [adId]);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedAdvertisement = { title, description, start_date, end_date };
    axios.put(`http://localhost:5000/advertisements/${adId}`, updatedAdvertisement)
      .then((response) => {
        console.log('Advertisement updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating advertisement:', error);
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
          <textarea id="description" cols="10" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='adv-field'>
          <label htmlFor="start_date">Start Date:</label>
          <input type="date" id="start_date" value={start_date} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div className='adv-field'>
          <label htmlFor="end_date">End Date:</label>
          <input type="date" id="end_date" value={end_date} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <button className='btn-adv-submit' type="submit">Update Advertisement</button>
      </form>
    </div>
  );
};

export default EditAdvertisement;
