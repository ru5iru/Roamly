import React, { useState } from "react";
import hotelAd3 from "../../assets/images/hotel-ad-3.jpeg";
import "./viewad.scss";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditAdvertisement from "./editadvertisement";

export const LimitedViewAdd = ({ advertisement }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="view-ad">
      <div className="ad-whole-up">
        <h2 className="ad-title">{advertisement.title}</h2>
        
      </div>
      <div className="ad-whole-bottom">
        <div className="ad-up">
          <img src={hotelAd3} alt="Advertisement" />
          <p className="ad-details">{advertisement.details}</p>
        </div>
        <div className="ad-bottom">
          <h6 className="ad-description">{advertisement.description}</h6>
        </div>
      </div>
    </div>
  );
};

export default LimitedViewAdd;

// return (
//   <div>
//     <h2>Edit Advertisement</h2>
//     <form>
//       <label>
//         Title:
//         <input
//           type="text"
//           name="title"
//           value={editedAdvertisement.title}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         Description:
//         <textarea
//           name="description"
//           value={editedAdvertisement.description}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         Start Date:
//         <input
//           type="date"
//           name="start_date"
//           value={editedAdvertisement.start_date}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         End Date:
//         <input
//           type="date"
//           name="end_date"
//           value={editedAdvertisement.end_date}
//           onChange={handleInputChange}
//         />
//       </label>
//       <button type="button" onClick={handleSaveChanges}>
//         Save Changes
//       </button>
//     </form>
//   </div>
// );
