import "./update.scss";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Update = ({ setOpenUpdate }) => {
   return (
      <div className="update">
         <div className="update-wrapper">
            <div className="update-head">Update Profile</div>
            <div className="files">
               <label htmlFor="cover">
                  <span>Cover Picture</span>
                  <div className="imgContainer">
                     <CloudUploadIcon className="icon" />
                  </div>
               </label>
               <input type="file" id="cover" style={{ display: "none" }} />
               <label htmlFor="profile">
                  <span>Profile Picture</span>
                  <div className="imgContainer">
                     <CloudUploadIcon className="icon" />
                  </div>
               </label>
               <input type="file" id="profile" style={{ display: "none" }} />
            </div>
            <div className="name-container">
               <div className="fname">
                  <label>First Name</label>
                  <input type="text" value="" name="name" onChange="" />
               </div>
               <div className="lname">
                  <label>Last Name</label>
                  <input type="text" value="" name="name" onChange="" />
               </div>
            </div>
            <div className="email-container">
               <div className="email">
                  <label>Email</label>
                  <input type="text" value="" name="name" onChange="" />
               </div>
            </div>

            <button className="updateDetails" onClick="">Update</button>

            <button className="closeUpdate" onClick={() => setOpenUpdate(false)}>
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

export default Update;
