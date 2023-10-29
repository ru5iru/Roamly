import React, { useContext, useEffect, useState } from "react";
import "./ratingspage.scss";
import { useLocation } from "react-router-dom";
import RatingPosts from "../../components/ratingComponents/ratingPosts/RatingPosts";
import Rating from "../../components/ratingComponents/rating/Rating";
import axios from "axios";
import AddReview from "../../components/ratingComponents/addReview/addReview";
import { AuthContext } from "../../context/authContext";
import ReviewForm from "../../components/ratingComponents/addReview/ReviewForm";
import { useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const RatingsPage = () => {
   const service_id = parseInt(useLocation().pathname.split("/")[2]);

   const [postProfileData, setPostProfileData] = useState([]);
   const [openAddReview, setOpenAddReview] = useState(false);
   const [triggerRefetch, setTriggerRefetch] = useState(false);

   const { currentUser } = useContext(AuthContext);

   useEffect(() => {
      axios.get("/users/profile/" + service_id).then((response) => {
         setPostProfileData(response.data);
      });
   }, [service_id]);

   const [postData, setPostData] = useState([]);
   const [error, setError] = useState(null);

   useEffect(() => {
      if (triggerRefetch) {
         setTriggerRefetch(false);
      }
      if (service_id) {
         axios
            .get(`/ratings?service_id=${service_id}`)
            .then((response) => {
               setPostData(response.data);
            })
            .catch((error) => {
               setError("Error fetching badges");
            });
      }
   }, [service_id, triggerRefetch]);

   const ratinArr = postData.map((post) => post.rating);

   const calculateAverage = (ratingArray) => {
      if (ratingArray.length === 0) {
         return 0;
      }
      const sum = ratingArray.reduce((total, current) => total + current, 0);
      let average = sum / ratingArray.length;
      average = Math.round(average * 2) / 2;

      return average;
   };

   const deleteMutation = useMutation(
      (rating_id) => {
         const requestData = { rating_id: rating_id };
         return makeRequest.delete("/ratings/", { params: requestData });
      },
      {
         onSuccess: () => {
            setTriggerRefetch(true);
         },
      }
   );

   return (
      <div className="ratingspage">
         <div className="left"></div>
         <div className="center">
            <div className="uInfo">
               <div className="left">
                  <div className="profileImg">
                     <img
                        className="profilePic"
                        src={postProfileData.profile_pic}
                        alt=""
                     />
                  </div>

                  <div className="top">
                     <div className="profileName">
                        {postProfileData.firstname} {postProfileData.lastname}
                     </div>
                     <Rating
                        rating={calculateAverage(ratinArr)}
                        count={ratinArr.length}
                     />
                  </div>
               </div>
               <div className="center">
                  <div className="top">
                     <div className="profileName">
                        {postProfileData.firstname} {postProfileData.lastname}
                     </div>
                     <Rating
                        rating={calculateAverage(ratinArr)}
                        count={ratinArr.length}
                     />
                  </div>
               </div>
            </div>
            {service_id != currentUser.user_id ? <AddReview setOpenAddReview={setOpenAddReview}/> : ""}
            <RatingPosts posts={postData} serviceID={service_id} deleteMutation={deleteMutation} />
         </div>
         <div className="right"></div>
         {openAddReview && (
               <ReviewForm
               setOpenAddReview={setOpenAddReview}
                  setTriggerRefetch={setTriggerRefetch}
               />
            )}
      </div>
   );
};

export default RatingsPage;
