import React from 'react';
import './taxi.scss';
import {BsFillTaxiFrontFill}  from 'react-icons/bs';
import {BiSolidPhoneCall} from "react-icons/bi";
import { FaPersonDress } from 'react-icons/fa6';

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
          <p>
            <FaPersonDress />
            <span className="passengers">{passengers} (max)</span>
          </p>
          <p className="description">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function Taxis() {
  const taxis = [
    {
      photo: 'https://images.pexels.com/photos/951318/pexels-photo-951318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Elegance Limousine',
      owner: 'Ava Martinez',
      type: 'Limousine',
      mobile: '+3456789012',
      passengers: 10,
      description: 'Arrive in style and sophistication with our luxurious and spacious limousine.',
    },
    {
      photo: 'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Wilderness Explorer Taxi',
      owner: 'Noah Williams',
      type: 'Off-Road',
      mobile: '+2345678901',
      passengers: 5,
      description: 'Embark on off-road adventures and discover hidden gems with our explorer taxi.',
    },
    {
      photo: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Sunset Dream Cab',
      owner: 'Olivia Thompson',
      type: 'Convertible',
      mobile: '+9876543210',
      passengers: 2,
      description: 'Witness breathtaking sunsets and enjoy a romantic ride in our convertible taxi.',
    },
    {
      photo: 'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'City Explorer Taxi',
      owner: 'John Smith',
      type: 'Sedan',
      mobile: '+1234567890',
      passengers: 4,
      description: 'Explore the city in comfort and style with our modern sedan taxis.',
    },
    {
      photo: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Urban Cruiser Taxi',
      owner: 'Michael Johnson',
      type: 'Sedan',
      mobile: '+1234567890',
      passengers: 4,
      description: 'Navigate the city with ease in our comfortable and efficient sedan taxis.',
    }
    
  ];

  return (
    <div>
      <div className="taxi-container">
        {taxis.map((taxi, index) => (
          <TaxiCard
            key={index}
            photo={taxi.photo}
            name={taxi.name}
            owner={taxi.owner}
            type={taxi.type}
            mobile={taxi.mobile}
            passengers={taxi.passengers}
            description={taxi.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Taxis;
