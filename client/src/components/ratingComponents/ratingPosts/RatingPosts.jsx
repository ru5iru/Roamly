import { useEffect, useState } from "react";
import axios from "axios";
import RatingPost from "../ratingPost/RatingPost";
import "./ratingposts.scss";

const RatingPosts = ({ serviceID }) => {
   const [postData, setPostData] = useState([]);
   const [error, setError] = useState(null);

   useEffect(() => {
      if (serviceID) {
         axios
            .get(`/ratings?service_id=${serviceID}`)
            .then((response) => {
               setPostData(response.data);
            })
            .catch((error) => {
               setError("Error fetching badges");
            });
      }
   }, [serviceID]);

   return (
      <div className="ratingposts">
         {postData.length > 0
            ? postData.map((post) => (
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
