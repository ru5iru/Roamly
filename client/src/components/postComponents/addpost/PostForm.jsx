import { useContext, useState } from "react";
import "./postform.scss";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { AuthContext } from "../../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";

const PostForm = ({ setOpenAddPost, setTriggerRefetch }) => {
   const [file, setFile] = useState(null);
   const [content, setContent] = useState("");

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
      (newPost) => {
         return makeRequest.post("/posts", newPost);
      },
      {
         onSuccess: () => {
            setTriggerRefetch(true);
         },
      }
   );

   const handleClick = async (e) => {
      e.preventDefault();
      let imgUrl = "";
      if (file) imgUrl = await upload();
      mutation.mutate({ user_id, content, img: imgUrl });
      setContent("");
      setOpenAddPost(false);
      setFile(null);
   };

   return (
      <div className="postform">
         <div className="create-post-wrapper">
            <div className="create-post-head">Create Post</div>
            <hr />
            <div className="userInfo">
               <img src={currentUser.profile_pic} alt="" />
               <div className="details">
                  <span className="name">
                     {currentUser.firstname} {currentUser.lastname}
                  </span>
                  <span className="date">Just now</span>
               </div>
            </div>
            <div className="add-content">
               <textarea
                  name=""
                  id=""
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  cols="30"
                  rows="7"
                  placeholder="How is your adventure?"
                  autoFocus
               ></textarea>
            </div>
            <div className="files">
               <label htmlFor="file">
                  <span>Choose a image</span>
                  <div className="imgContainer">
                     {file && (
                        <img
                           className="file"
                           alt=""
                           src={URL.createObjectURL(file)}
                        />
                     )}
                     <CloudUploadIcon className="icon" />
                  </div>
               </label>
               <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
               />
            </div>

            <button className="updateDetails" onClick={handleClick}>
               Post
            </button>

            <button
               className="closeUpdate"
               onClick={() => setOpenAddPost(false)}
            >
               <img
                  className="closeImg"
                  src="https://img.icons8.com/material-outlined/96/cancel--v1.png"
                  alt="cancel--v1"
               />
            </button>
         </div>
      </div>
   );
};

export default PostForm;
