import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const AdvertisementsPage = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ad_media, setAdMedia] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send advertisement data to the back-end for adding/updating
    const newAdvertisement = { title, description, ad_media, start_date, end_date };
    axios.post('http://localhost:5000/advertisements', newAdvertisement)
      .then((response) => {
        console.log('Advertisement added successfully:', response.data);
        // Clear the form fields after successful submission
        setTitle('');
        setDescription('');
        setAdMedia('');
        setStartDate('');
        setEndDate('');
      })
      .catch((error) => {
        console.error('Error adding advertisement:', error);
      });
  };

  return (
    
    <div>
      <div>
        <h2>Advertisements</h2>
        <ul>
          {advertisements.map((ad) => (
            <li key={ad.ad_id}>
              {ad.title}
              {/* Add more details from the advertisement as needed */}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Advertisement Form</h2>
        <form onSubmit={handleSubmit}>
          {/* ... Form input fields ... */}
          <button type="submit">Add Advertisement</button>
        </form>
      </div>
      <div>
        <h2>Advertisement Item</h2>
        {advertisements.map((ad) => (
          <div key={ad.ad_id}>
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
            {/* Display other details from the advertisement as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertisementsPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import './advertisementpage.scss'; // Import your SCSS stylesheet

// export const AdvertisementsPage = () => {
//   const [advertisements, setAdvertisements] = useState([]);

//   useEffect(() => {
//     // Fetch advertisements from the back-end
//     axios.get('http://localhost:5000/advertisements')
//       .then((response) => {
//         setAdvertisements(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Advertisements</h1>
//       <ul className="advertisement-list">
//         {advertisements.map((ad) => (
//           <li key={ad.ad_id} className="advertisement-item">
//             <div className="advertisement-content">
//               <h2>{ad.title}</h2>
//               <p>{ad.description}</p>
//               <div className="advertisement-media">
//                 <img src={ad.ad_media} alt="Advertisement" />
//               </div>
//               <div className="advertisement-dates">
//                 <p>
//                   <strong>Start Date:</strong> {new Date(ad.start_date).toLocaleDateString()}
//                 </p>
//                 <p>
//                   <strong>End Date:</strong> {new Date(ad.end_date).toLocaleDateString()}
//                 </p>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdvertisementsPage;