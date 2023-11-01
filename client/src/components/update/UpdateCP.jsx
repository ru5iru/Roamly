import { useContext, useState } from "react";
import "./update.scss";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { AuthContext } from "../../context/authContext";
import { useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const UpdateCP = ({ coverPic, setOpenUpdateCP, setTriggerRefetch }) => {
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
      (newCP) => {
         return makeRequest.put("/users/coverpic", newCP);
      },
      {
         onSuccess: () => {
            setTriggerRefetch(true);
         },
      }
   );

   const handleUpdateCP = async (e) => {
      e.preventDefault();
      let imgUrl = "";
      if (file) imgUrl = await upload();
      mutation.mutate({ user_id, img: imgUrl });
      setOpenUpdateCP(false);
      setFile(null);
   };

   return (
      <div className="update">
         <div className="update-wrapper">
            <div className="update-head">Update Cover Picture</div>
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
                        <img className="file" alt="" src={coverPic} />
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

            <button className="updateDetails" onClick={handleUpdateCP}>
               Update
            </button>

            <button
               className="closeUpdate"
               onClick={() => setOpenUpdateCP(false)}
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

export default UpdateCP;
