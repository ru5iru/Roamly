import { useContext, useState } from "react";
import "./postform.scss";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { AuthContext } from "../../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";

const PostForm = ({ setOpenAddPost, setTriggerRefetch }) => {
   const [content, setContent] = useState("");

   const { currentUser } = useContext(AuthContext);

   // const queryClient = useQueryClient();
   const user_id = currentUser.user_id;

   const mutation = useMutation(
      (newPost) => {
         return makeRequest.post("/posts", newPost);
      },
      {
         onSuccess: () => {
            // Invalidate and refetch
            // queryClient.invalidateQueries(["posts"]);
            setTriggerRefetch(true)
         },
      }
   );

   const handleClick = async (e) => {
      e.preventDefault();
      mutation.mutate({user_id, content});
      setContent("");
      setOpenAddPost(false);
   };


   return (
      <div className="postform">
         <div className="create-post-wrapper">
            <div className="create-post-head">Create Post</div>
            <hr />
            <div className="userInfo">
               <img src={currentUser.profile_pic} alt="" />
               <div className="details">
                  <span className="name">{currentUser.firstname} {currentUser.lastname}</span>
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
               <label htmlFor="image">
                  <span>Choose a image</span>
                  <div className="imgContainer">
                     <CloudUploadIcon className="icon" />
                  </div>
               </label>
               <input type="file" id="image" style={{ display: "none" }} />
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
