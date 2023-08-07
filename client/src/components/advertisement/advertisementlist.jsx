import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdvertisementItem from './AdvertisementItem';

const AdvertisementList = () => {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    // Fetch advertisements from the back-end
    axios.get('http://localhost:5000/advertisements')
      .then((response) => {
        setAdvertisements(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Advertisements</h2>
      {advertisements.length === 0 ? (
        <p>No advertisements found.</p>
      ) : (
        <ul>
          {advertisements.map((ad) => (
            <li key={ad.ad_id}>
              <AdvertisementItem advertisement={ad} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdvertisementList;
