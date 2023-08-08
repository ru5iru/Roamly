import React from 'react';
import './TaxiCard.css';
// import taxiIcon from './taxi-icon.png';
// import mobileIcon from './mobile-icon.png';
// import passengersIcon from './passengers-icon.png';
// import crownIcon from './crown-icon.png';

function TaxiCard(props) {
  const { photo, name, owner, type, mobile, passengers } = props;

  return (
    <div className="taxi-card">
       <div className="crown-container">
        <img src='' alt="crown icon" className="crown-icon" />
      </div>
      <div className="left-section">
        <img src='' alt={name} className="taxi-photo" />
      </div>
      <div className="right-section">
        <div className="details">
          <h2>{name}</h2>
          <p>
            {owner}
          </p>
          <p>
            <img src='' alt="taxi icon" className="icon" />
            <span className="type">{type}</span>
          </p>
          <p>
            <img src='' alt="mobile icon" className="icon" />
            <span className="mobile">{mobile}</span>
          </p>
          <p>
            <img src='' alt="passengers icon" className="icon" />
            <span className="passengers">{passengers} (max)</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaxiCard;
