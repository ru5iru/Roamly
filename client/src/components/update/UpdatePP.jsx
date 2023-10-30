import { useContext, useState } from "react";
import "./update.scss";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { AuthContext } from "../../context/authContext";
import { useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const UpdatePP = ({ profilePic, setOpenUpdatePP, setTriggerRefetch }) => {
   const [file, setFile] = useState(null);

   const { currentUser } = useContext(AuthContext);

   const user_id = currentUser.user_id;

   const upload = async () => {
      try {
         const formData = new FormData();
         formData.append("file", file);
         const res = await makeRequest.post("/upload", formData);
         return res.data;
      } catch (err) {
         console.log(err);
      }
   };

   const mutation = useMutation(
      (newPP) => {
         return makeRequest.put("/users/propic", newPP);
      },
      {
         onSuccess: () => {
            setTriggerRefetch(true);
         },
      }
   );

   const handleUpdatePP = async (e) => {
      e.preventDefault();
      let imgUrl = "";
      if (file) imgUrl = await upload();
      mutation.mutate({ user_id, img: imgUrl });
      setOpenUpdatePP(false);
      setFile(null);
   };

   console.log(profilePic);
   return (
      <div className="update">
         <div className="update-wrapper">
            <div className="update-head">Update Profile Picture</div>
            <div className="files">
               <label htmlFor="profile">
                  <div className="imgContainer">
                     {file ? (
                        <img
                           className="file"
                           alt=""
                           src={URL.createObjectURL(file)}
                        />
                     ) : (
                        <img
                           className="file"
                           alt=""
                           src={profilePic}
                        />
                     )}
                     <CloudUploadIcon className="icon" />
                  </div>
               </label>
               <input
                  type="file"
                  id="profile"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
               />
            </div>

            <button className="updateDetails" onClick={handleUpdatePP}>
               Update
            </button>

            <button
               className="closeUpdate"
               onClick={() => setOpenUpdatePP(false)}
            >
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
