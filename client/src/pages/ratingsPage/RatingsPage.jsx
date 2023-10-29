import React from "react";
import "./ratingspage.scss";
import { useLocation } from "react-router-dom";
import RatingPosts from "../../components/ratingComponents/ratingPosts/RatingPosts";
import Rating from "../../components/ratingComponents/rating/Rating";

const RatingsPage = () => {
   const service_id = parseInt(useLocation().pathname.split("/")[2]);
   console.log(service_id);
   return (
      <div className="ratingspage">
         <div className="left"></div>
         <div className="center">
         <div className="uInfo">
                  <div className="left">
                     <div className="profileImg">
                        <img
                           className="profilePic"
                           src=""
                           alt=""
                        />
                     </div>

                     <div className="top">
                        <div className="profileName">
                           Hotel Hotel
                        </div>
                        <Rating rating={3.5} />
                     </div>
                  </div>
                  <div className="center">
                     <div className="top">
                        <div className="profileName">
                           Hotel Hotel
                        </div>
                        <Rating rating={3.5} />
                     </div>
                  </div>
               </div>
            <RatingPosts serviceID={service_id} />
         </div>
         <div className="right"></div>
      </div>
   );
};

export default RatingsPage;
