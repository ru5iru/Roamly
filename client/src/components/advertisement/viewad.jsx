import React, { useState } from "react";
import { Link } from "react-router-dom";
import hotelAd3 from "../../assets/images/hotel-ad-2.jpg";
import "./viewad.scss";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditAdvertisement from "./editadvertisement";
import DeleteAdvertisement from "./dltadv";
// import ad from "../../upload/"
export const ViewAdd = ({ advertisement }) => {
  const [isDltModalOpen, setIsDltModalOpen] = useState(false);
  const [iseditModalOpen, setIsEditModalOpen] = useState(false);

  const adId = advertisement.ad_id;

  const handleButtonClickEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleButtonClickdlt = () => {
    setIsDltModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  
  const closeDltModal = () => {
    setIsDltModalOpen(false);
  };

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
    <div className="view-ad">
      <div className="ad-whole-up">
        <h2 className="ad-title">{advertisement.title}</h2>       
      </div>
      <div className="ad-whole-bottom">
        <div className="ad-up">
        <img src={advertisement.ad_media ? setImageUrl(advertisement.ad_media) : ""} alt="" />
        {/* <img src={`../../upload/${advertisement.ad_media}`} alt={advertisement.ad_media} />
        <img src="../../upload/1698812482611.png" alt={advertisement.ad_media} /> */}
          <p className="ad-details">{advertisement.details}</p>
        </div>
        <div className="ad-bottom">
          <h6 className="ad-description">{advertisement.description}</h6>
          <p>{advertisement.ad_id}</p>
        </div>
      </div>
      <div className="edit-delete">
          {/* <FaRegEdit
            className="edit"
            title="Edit"
            onClick={handleButtonClickEdit}
          />
          {iseditModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <div className="close-button" onClick={closeEditModal}>
                  <span>&times;</span>
                </div>
                <EditAdvertisement adId={adId}/>
              </div>
            </div>
          )} */}
          <RiDeleteBin5Line className="dlt" title="Delete" onClick={handleButtonClickdlt} />
          {isDltModalOpen && (
            <div className="modal-dlt">
              <div className="modal-content-dlt">
                <div className="close-button-dlt" onClick={closeDltModal}>
                  <span>&times;</span>
                </div>
                <DeleteAdvertisement />
              </div>
            </div>
          )}
        </div>
    </div>
  );
};

export default ViewAdd;

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