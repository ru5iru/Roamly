import { useEffect, useState } from "react";
import axios from "axios";
import RatingPost from "../ratingPost/RatingPost";
import "./ratingposts.scss";

const RatingPosts = ({ posts, serviceID }) => {

   return (
      <div className="ratingposts">
         {posts.length > 0
            ? posts.map((post) => (
                 <RatingPost
                    serviceID={serviceID}
                    post={post}
                    key={post.rating_id}
                  //   deleteMutation={deleteMutation}
                 />
              ))
            : <div className="empty">User hasn't posted yet. :{`(`}</div>}
      </div>
   );
};

export default RatingPosts;
