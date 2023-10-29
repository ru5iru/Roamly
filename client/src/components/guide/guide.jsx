import React, { useEffect, useState } from "react";
import "./guide.scss";
import axios from "axios";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaLanguage,
  FaBookmark,
} from "react-icons/fa";

function TravelGuide(props) {
  const {
    photo,
    fname,
    lname,
    location,
    languages,
    telephone,
    isTopGuide,
    description,
  } = props;

  return (
    <div className={`travel-guide-card ${isTopGuide ? "top-guide" : ""}`}>
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
          <h2>
            {fname} {lname}
          </h2>
          <p>
            <FaMapMarkerAlt />
            <span className="location">{location}</span>
          </p>
          <p>
            <FaLanguage />
            <span className="languages">{languages}</span>
          </p>
          <p>
            <FaPhone />
            <span className="phone">0{telephone}</span>
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
  }, []);

  return (
    <div>
      <div className="guide-container">
        {guideDetails.map((guide, index) => (
          <TravelGuide
            key={index}
            photo={guide.profile_pic}
            location={guide.location}
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
