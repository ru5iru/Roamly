import React, { useState } from 'react';
import './filter.scss'; // Import your SCSS file

function Filter() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);

    const additionalDetailsContainer = document.getElementById('additional-details');
    additionalDetailsContainer.innerHTML = ''; // Clear previous details

    if (selectedValue === 'location') {
      const locationInput = document.createElement('input');
      locationInput.type = 'text';
      locationInput.placeholder = 'Enter location...';
      additionalDetailsContainer.appendChild(locationInput);
    } else if (selectedValue === 'hotelName') {
      const hotelNameInput = document.createElement('input');
      hotelNameInput.type = 'text';
      hotelNameInput.placeholder = 'Enter hotel name...';
      additionalDetailsContainer.appendChild(hotelNameInput);
    }
    // Add more conditions for other options as needed
  };

  return (
    <div className="filter-container">
      <h3 className="filter-heading">Filter</h3>
      <label className="filter-label">
        
        <select
          name="filterBy"
          className="filter-select"
          onChange={handleFilterChange}
        >
          <option value="" disabled selected>
            Select an option
          </option>
          <option value="location">Location</option>
          <option value="hotelName">Hotel Name</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <div className="additional-details" id="additional-details"></div>
    </div>
  );
}

export default Filter;
