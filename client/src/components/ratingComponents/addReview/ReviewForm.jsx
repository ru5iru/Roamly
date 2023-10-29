import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import "./reviewform.scss";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { AuthContext } from "../../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import { Rating } from "@mui/material";

const ReviewForm = ({ setOpenAddReview, setTriggerRefetch }) => {
   const [comment, setComment] = useState("");
   const [rating, setRating] = useState(1);

   const { currentUser } = useContext(AuthContext);

   const user_id = currentUser.user_id;
   const service_id = parseInt(useLocation().pathname.split("/")[2]);

   const mutation = useMutation(
      (newReview) => {
         return makeRequest.post("/ratings", newReview);
      },
      {
         onSuccess: () => {
            setTriggerRefetch(true);
         },
      }
   );

   const handleClick = async (e) => {
      e.preventDefault();
      mutation.mutate({ service_id, user_id, rating, comment });
      setComment("");
      setOpenAddReview(false);
   };

   const handleRatingChange = (event, newValue) => {
      setRating(newValue);
   };

   return (
      <div className="reviewform">
         <div className="create-post-wrapper">
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
               value={rating}
               precision={1}
               size="large"
               onChange={handleRatingChange}
            />
            <div className="add-content">
               <textarea
                  name=""
                  id=""
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  cols="40"
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
