import React, { useEffect, useState } from 'react';
import './guide.scss';
import axios from 'axios';

function TravelGuide(props) {
  const { photo, fname, lname, languages, telephone, isTopGuide, description  } = props;

  return (
    <div className={`travel-guide-card ${isTopGuide ? 'top-guide' : ''}`}>
      {isTopGuide && (
        <div className="crown-container">
          {/* <img src='https://png.pngtree.com/element_our/20200702/ourmid/pngtree-vip-golden-crown-icon-member-golden-crown-champion-first-ranking-exclusive-image_2291844.jpg' alt="crown icon" className="crown-icon" /> */}
        </div>
      )}
      <div className="left-section">
        <img src={photo} alt={fname} className="travel-guide-photo" />
      </div>
      <div className="right-section">
        <div className="details">
          <h2>{fname} {lname}</h2>
          <p>
            <img src='https://img.icons8.com/ios7/600w/228BE6/language.png'alt="language icon" className="icon" />
            <span className="languages">{languages}</span>
          </p>
          <p>
            <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQITEJyULCnxeDmNeNixKaqdR4inGBs1X82t0CQZP6SZG98nNbN' alt="phone icon" className="icon" />
            <span className="telephone">{telephone}</span>
          </p>
          {/* <p><span className='description'>
            {description}
          </span>
          </p> */}
        </div>
      </div>
    </div>
  );
}

function Guides() {
  
  const [guideDetails, setGuideDetails] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:8000/server/services/guides?location=Sri")
    .then((response) => {
      setGuideDetails(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  },[]);

  return (
    <div>
      <div className="guide-container">
        {guideDetails.map((guide, index) => (
          <TravelGuide
            key={index}
            photo={guide.profile_pic}
            fname={guide.firstname}
            lname={guide.lastname}
            languages={guide.type}
            telephone={guide.contact_no}
            // isTopGuide={guide.isTopGuide}
            // description={guide.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Guides;
