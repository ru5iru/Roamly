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
        <img src='https://png.pngtree.com/element_our/20200702/ourmid/pngtree-vip-golden-crown-icon-member-golden-crown-champion-first-ranking-exclusive-image_2291844.jpg' alt="crown icon" className="crown-icon" />
      </div>
      <div className="left-section">
        <img src={photo} alt={name} className="taxi-photo" />
      </div>
      <div className="right-section">
        <div className="details">
          <h2>{name}</h2>
          <p>
            {owner}
          </p>
          <p>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8dcwbDUv2Y5QfwfBa_gPlF_LPKFwPRo7RUYLRAoxRfNOjk_TsxDyzSnz_-BER9J_sJQ&usqp=CAU' alt="taxi icon" className="icon" />
            <span className="type">{type}</span>
          </p>
          <p>
            <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQITEJyULCnxeDmNeNixKaqdR4inGBs1X82t0CQZP6SZG98nNbN' alt="mobile icon" className="icon" />
            <span className="mobile">{mobile}</span>
          </p>
          <p>
            <img src='https://w7.pngwing.com/pngs/389/412/png-transparent-font-awesome-computer-icons-user-profile-users-group-blind-miscellaneous-blue-text.png' alt="passengers icon" className="icon" />
            <span className="passengers">{passengers} (max)</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaxiCard;
