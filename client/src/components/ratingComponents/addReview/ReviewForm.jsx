import { useContext, useState } from "react";
import "./reviewform.scss";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { AuthContext } from "../../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import { Rating } from "@mui/material";

const ReviewForm = ({ setOpenAddReview, setTriggerRefetch }) => {
   const [content, setContent] = useState("");
   const [userRating, setUserRating] = useState(1);

   const { currentUser } = useContext(AuthContext);

   const user_id = currentUser.user_id;

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
      mutation.mutate({ user_id, content });
      setContent("");
      setOpenAddReview(false);
   };

   const handleRatingChange = (event, newValue) => {
      setUserRating(newValue);
      console.log(newValue)
   };

   return (
      <div className="reviewform">
         <div className="create-post-wrapper">
            {/* <div className="create-post-head">Rate</div> */}
            {/* <hr /> */}
            <div className="userInfo">
               <img src={currentUser.profile_pic} alt="" />
               <div className="details">
                  <span className="name">
                     {currentUser.firstname} {currentUser.lastname}
                  </span>
                  <span className="date">Just now</span>
               </div>
            </div>
            <div className="ratehere">Rate Your Experience</div>
            <Rating
               name="rating"
               value={userRating}
               precision={1}
               size="large"
               onChange={handleRatingChange}
            />
            <div className="add-content">
               <textarea
                  name=""
                  id=""
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  cols="30"
                  rows="6"
                  placeholder="Write a review.."
                  autoFocus
               ></textarea>
            </div>

            <button className="updateDetails" onClick={handleClick}>
               Post
            </button>

            <button
               className="closeUpdate"
               onClick={() => setOpenAddReview(false)}
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

export default ReviewForm;
