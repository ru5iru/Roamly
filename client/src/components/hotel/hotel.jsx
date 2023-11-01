import React, { useEffect, useState } from "react";
import "./hotel.scss";
import booking from "../../assets/images/booking.png";
import agoda from "../../assets/images/agoda.png";
import kayak from "../../assets/images/kayak.png";
import { FaPhone, FaMapMarkerAlt, FaHotel, FaBookmark } from "react-icons/fa";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

function HotelCard(props) {
  const { photo, name, phone, location, type } = props;

  const setImageUrl = (currUrl = '') => {
    if (currUrl !== null && currUrl.length > 50) {
       return currUrl;
    } else if (currUrl !== null) {
       try {
          return require("../../../public/upload/" + currUrl);
       } catch {
          
       }
    }
 }

  return (
    <div className="hotel-card">
      <div className="left-section">
        <img src={setImageUrl(photo)} alt={name} className="hotel-photo" />
      </div>
      <div className="right-section">
        <div className="details">
          <h2>{name}</h2>
          <p>
            <FaMapMarkerAlt />
            <span className="location">{location}</span>
          </p>
          <p>
            <FaPhone />
            <span className="phone">0{phone}</span>
          </p>
          <p>
            <FaHotel />
            <span className="hotel">{type}</span>
          </p>
          <span className="booking-sites">
            <FaBookmark />
            <a href="https://www.agoda.com/">
              <img className="img1" src={agoda} alt="agoda" />
            </a>
            <a href="https://www.booking.com/">
              <img className="img2" src={booking} alt="booking.com" />
            </a>
            <a href="https://www.kayak.com/">
              <img className="img3" src={kayak} alt="kayak" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

function Hotel() {
  const [hotelDetails, setHotelDetails] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const locationValue = queryParams.get("location")




  useEffect(() => {
    axios
      .get(`http://localhost:8000/server/services/hotels?location=${locationValue}`)
      .then((response) => {
        setHotelDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {hotelDetails.map((hotel, index) => (
        <HotelCard
          key={index}
          photo={hotel.profile_pic}
          name={hotel.service_name}
          type={hotel.type}
          location={hotel.location}
          phone={hotel.contact_no}
        />
      ))}
    </div>
  );
}

export default Hotel;
