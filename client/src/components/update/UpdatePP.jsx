import { useState } from "react";
import "./update.scss";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const UpdatePP = ({ profilePic, setOpenUpdatePP }) => {

   const [newProfilePic, setNewProfilePic] = useState(profilePic);

   const handleUpdatePP = () => {
      
   };

   console.log(profilePic)
   return (
      <div className="update">
         <div className="update-wrapper">
            <div className="update-head">Update Profile Picture</div>
            <div className="files">
               <label htmlFor="profile">
                  <div className="imgContainer">
                     <img src={newProfilePic} alt="" />
                     <CloudUploadIcon className="icon" />
                  </div>
               </label>
               <input type="file" id="profile" style={{ display: "none" }} />
            </div>

            <button className="updateDetails" onClick={handleUpdatePP}>Update</button>

            <button className="closeUpdate" onClick={() => setOpenUpdatePP(false)}>
               <img
                  className="closeImg"
                  width="96"
                  height="96"
                  src="https://img.icons8.com/material-outlined/96/cancel--v1.png"
                  alt="cancel--v1"
               />
            </button>
         </div>
      </div>
   );
};

export default UpdatePP;
