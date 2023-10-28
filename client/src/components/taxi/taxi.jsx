import React, { useEffect, useState } from 'react';
import './taxi.scss';
import {BsFillTaxiFrontFill}  from 'react-icons/bs';
import {BiSolidPhoneCall} from "react-icons/bi";
import { FaPersonDress } from 'react-icons/fa6';
import axios from 'axios';

function TaxiCard(props) {
  const { photo, name, owner, type, mobile, passengers, description } = props;

  return (
    <div className="taxi-card">
      
      <div className="left-section">
        <img src={photo} alt={name} className="taxi-photo" />
      </div>
      <div className="right-section">
        <div className="details">
          <h2>{name}</h2>
          <p>
            Owner: {owner}
          </p>
          <p>
            <BsFillTaxiFrontFill />
            <span className="type">{type}</span>
          </p>
          <p>
            <BiSolidPhoneCall />
            <span className="mobile">{mobile}</span>
          </p>
          {/* <p>
            <FaPersonDress />
            <span className="passengers">{passengers} (max)</span>
          </p>
          <p className="description">
            {description}
          </p> */}
        </div>
      </div>
    </div>
  );
}

function Taxis() {
  
  const[taxiDetails, setTaxiDetails] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:8000/server/services/taxis?location=Sri")
    .then((response) => {
      setTaxiDetails(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  },[]);

  return (
    <div>
      <div className="taxi-container">
        {taxiDetails.map((taxi, index) => (
          <TaxiCard
            key={index}
            photo={taxi.photo}
            name={taxi.service_name}
            owner={taxi.firstname}
            type={taxi.type}
            mobile={taxi.contact_no}
            // passengers={taxi.passengers}
            // description={taxi.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Taxis;
