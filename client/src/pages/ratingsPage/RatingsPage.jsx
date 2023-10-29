import React from "react";
import "./ratingspage.scss";
import { useLocation } from "react-router-dom";
import RatingPosts from "../../components/ratingComponents/ratingPosts/RatingPosts";

const RatingsPage = () => {
   const service_id = parseInt(useLocation().pathname.split("/")[2]);
   console.log(service_id);
   return (
      <div className="ratingspage">
         <div className="left"></div>
         <div className="center">
            <RatingPosts serviceID={service_id} />
         </div>
         <div className="right"></div>
      </div>
   );
};

export default RatingsPage;
