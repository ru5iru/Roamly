import React, { useState } from "react";
import hotelAd3 from "../../assets/images/hotel-ad-3.jpeg";
import "./viewad.scss";
import EditAdvertisement from "./editadvertisement";

export const LimitedViewAdd = ({ advertisement }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="view-ad">
      <div className="ad-whole-up">
        <h2>{advertisement.title}</h2>
        <div className="edit-delete">
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <div className="close-button" onClick={closeModal}>
                  <span>&times;</span>
                </div>
                <EditAdvertisement />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="ad-whole-bottom">
        <div className="ad-left">
          <img src={hotelAd3} alt="Advertisement" />
        </div>
        <div className="ad-right">
          <h5>{advertisement.description}</h5>
          <p>
            {new Date(advertisement.start_date).getDate()}th of{" "}
            {new Date(advertisement.start_date).toLocaleString("default", {
              month: "long",
            })}{" "}
            to {new Date(advertisement.end_date).getDate()}th of{" "}
            {new Date(advertisement.end_date).toLocaleString("default", {
              month: "long",
            })}
          </p>
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
