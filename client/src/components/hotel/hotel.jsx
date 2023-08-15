import React from 'react';
import './hotel.scss';
import booking from "../../assets/images/booking.png";
import agoda from "../../assets/images/agoda.png";
import kayak from "../../assets/images/kayak.png";
import { FaPhone, FaMapMarkerAlt, FaHotel, FaBookmark } from 'react-icons/fa';

function HotelCard(props) {
  const { photo, name, location, phone } = props;

  return (
    <div className="hotel-card">
      <div className="left-section">
        <img src={photo} alt={name} className="hotel-photo" />
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
            <span className="phone">{phone}</span>
          </p>
          <p>
            <FaHotel />
            <span className="hotel">Hotel</span>
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
  const hotels = [
    {
      photo: 'https://cdn-img.readytotrip.com/t/1024x768/content/e2/70/e270dcc185320fb1493fac7aaa4d45c51c4b8f12.jpeg',
      name: 'TreeHouse Chalets',
      location: 'Pragathi Pre School Road, Halpe, Belihuloya',
      phone: '0717073529',
    },
    {
      photo: 'https://th.bing.com/th/id/Ab6FmtZnH3wzACA480x360?&rs=1&pid=ImgDet',
      name: 'Belihuloya River Garden Hotel',
      location: 'Riverside Road, Belihuloya',
      phone: '0771234567',
    },
    {
      photo: 'https://images.trvl-media.com/lodging/91000000/90980000/90976900/90976891/1500bb74.jpg?impolicy=resizecrop&rw=1200&ra=fit',
      name: 'Mountain Top Glamping Tree House with a Star Bed',
      location: 'Haputale - Belihuloya Rd, Belihuloya',
      phone: '0789876543',
    },
    {
      photo: 'https://images.trvl-media.com/lodging/36000000/35180000/35174300/35174226/9e43f8a2.jpg?impolicy=resizecrop&rw=1200&ra=fit',
      name: 'Green Valley Hotel',
      location: 'Ratnapura - Wellawaya - Batticaloa Rd, Belihuloya',
      phone: '0758765432',
    },
  ];

  return (
    <div>
      {hotels.map((hotel, index) => (
        <HotelCard
          key={index}
          photo={hotel.photo}
          name={hotel.name}
          location={hotel.location}
          phone={hotel.phone}
        />
      ))}
    </div>
  );
}

export default Hotel;
