import React, { useState } from "react";
import axios from "axios";

import "./advertisementform.scss";

const AdvertisementForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [ad_media, setAdMedia] = useState('');
  // const [service_type, setServiceType] = useState('');
  const [details, setDetails] = useState("");
  const [service_type, setService_Type] = useState("");

  // const handleAdMediaChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => {
  //       // Store the base64 encoded string of the file in the state
  //       setAdMedia(reader.result);
  //     };
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send advertisement data to the back-end for adding/updating
    const newAdvertisement = { service_type, title, description, details };
    axios
      .post("http://localhost:8000/server/ads/advertisements", newAdvertisement)
      .then((response) => {
        console.log("Advertisement added successfully:", response.data);
        // Clear the form fields after successful submission
        // setServiceType('');
        setService_Type("");
        setTitle("");
        setDescription("");
        // setAdMedia('');
        setDetails("");
      })
      .catch((error) => {
        console.error("Error adding advertisement:", error);
      });
  };

  return (
    <div className="modify-advertisement">
      <h2>Add Advertisement</h2>
      <form className="adv-form" onSubmit={handleSubmit}>
        {/* <div className='adv-field'>
          <label htmlFor="service_type">Service Type:</label>
          <select id="service_type" value={service_type} onChange={(e) => setServiceType(e.target.value)}>
            <option value="hotel">Hotel</option>
            <option value="shop">Shop</option>
            <option value="taxidriver">Taxi Driver</option>
            <option value="tourguide">Tour Guide</option>
          </select>
        </div> */}
        <div className="adv-field">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            maxLength="35"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="adv-field">
          <label htmlFor="service_type">Service Type:</label>
          <input
            type="text"
            id="service_type"
            value={service_type}
            onChange={(e) => setService_Type(e.target.value)}
          />
        </div>
        <div className="adv-field">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            rows="12"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="adv-field">
          <label htmlFor="details">Details:</label>
          <textarea
            id="details"
            rows="5"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        {/* <div>
          <label htmlFor="ad_media">Ad Media File:</label>
          <input type="file" id="ad_media" onChange={handleAdMediaChange} />
        </div> */}

        <button className="btn-adv-submit" type="submit">
          Add Advertisement
        </button>
      </form>
    </div>
  );
};

export default AdvertisementForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// const AdvertisementForm = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   // const [ad_media, setAdMedia] = useState('');
//   const [start_date, setStartDate] = useState('');
//   const [end_date, setEndDate] = useState('');

//   // const handleAdMediaChange = (event) => {
//   //   const file = event.target.files[0];
//   //   if (file) {
//   //     const reader = new FileReader();
//   //     reader.readAsDataURL(file);
//   //     reader.onloadend = () => {
//   //       // Store the base64 encoded string of the file in the state
//   //       setAdMedia(reader.result);
//   //     };
//   //   }
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Send advertisement data to the back-end for adding/updating
//     const newAdvertisement = { title, description, start_date, end_date };
//     axios.post('http://localhost:5000/advertisements', newAdvertisement)
//       .then((response) => {
//         console.log('Advertisement added successfully:', response.data);
//         // Clear the form fields after successful submission
//         setTitle('');
//         setDescription('');
//         // setAdMedia('');
//         setStartDate('');
//         setEndDate('');
//       })
//       .catch((error) => {
//         console.error('Error adding advertisement:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Add Advertisement</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
//         </div>
//         {/* <div>
//           <label htmlFor="ad_media">Ad Media File:</label>
//           <input type="file" id="ad_media" onChange={handleAdMediaChange} />
//         </div> */}
//         <div>
//           <label htmlFor="start_date">Start Date:</label>
//           <input type="date" id="start_date" value={start_date} onChange={(e) => setStartDate(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="end_date">End Date:</label>
//           <input type="date" id="end_date" value={end_date} onChange={(e) => setEndDate(e.target.value)} />
//         </div>
//         <button type="submit">Add Advertisement</button>
//       </form>
//     </div>
//   );
// };

// export default AdvertisementForm;