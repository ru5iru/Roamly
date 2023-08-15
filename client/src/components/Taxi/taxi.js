import React from 'react';
import './TaxiCard.scss';

function TaxiCard(props) {
  const { photo, name, owner, type, mobile, passengers } = props;

  return (
    
    <div className="taxi-card">
      
      <div className="left-section">
        <img src={photo} alt={name} className="taxi-photo" />
      </div>
      <div className="right-section">
        <div className="details">
          <h2>{name}</h2>
          <p>{owner}</p>
          <p>
            {/* <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQITEJyULCnxeDmNeNixKaqdR4inGBs1X82t0CQZP6SZG98nNbN' alt="mobile icon" className="icon" /> */}
            <span className="mobile">{type}</span>
          </p>
          <p>
            {/* <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQITEJyULCnxeDmNeNixKaqdR4inGBs1X82t0CQZP6SZG98nNbN' alt="mobile icon" className="icon" /> */}
            <span className="mobile">{mobile}</span>
          </p>
          <p>
            {/* <img src='https://w7.pngwing.com/pngs/389/412/png-transparent-font-awesome-computer-icons-user-profile-users-group-blind-miscellaneous-blue-text.png' alt="passengers icon" className="icon" /> */}
            <span className="passengers">{passengers} (max) passengers</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Taxi() {
  const taxiservices = [
    {
      photo: "https://packtolife.com/wp-content/uploads/2017/07/featured-image-how-rent-tuktuk-sri-lanka.jpg",
      name: "Prasad's Tuktuk",
      owner: "Prasad Jaysinghe",
      type: "Tuktuk",
      mobile: "0775674567",
      passengers: 3,
    },
    {
      photo: "https://packtolife.com/wp-content/uploads/2017/07/featured-image-how-rent-tuktuk-sri-lanka.jpg",
      name: "Lanka Cabs",
      owner: "Lanka Cabs Pvt. Ltd.",
      type: "Car",
      mobile: "0712345678",
      passengers: 4,
    },
  ];

  return (
    <div>
      <h1 className="page-title">Taxi Services</h1>
      <div className="taxi-container">
        {taxiservices.map((taxi, index) => (
          <TaxiCard
            key={index}
            photo={taxi.photo}
            name={taxi.name}
            owner={taxi.owner}
            type={taxi.type}
            mobile={taxi.mobile}
            passengers={taxi.passengers}
          />
        ))}
      </div>
    </div>
  );
}

export default Taxi;
