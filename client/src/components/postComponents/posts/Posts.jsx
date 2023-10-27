import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../post/Post";
import "./posts.scss";
import { Socket } from "socket.io-client";

const Posts = ({ userID, deleteMutation }) => {
   const [postData, setPostData] = useState([]);
   const [error, setError] = useState(null);
   useEffect(() => {
      if (userID) {
         axios
            .get(`/posts?userId=${userID}`)
            .then((response) => {
               setPostData(response.data);
            })
            .catch((error) => {
               setError("Error fetching badges");
            });
      }
   }, [userID, deleteMutation]);

   return (
      <div className="posts">
         {postData.length > 0
            ? postData.map((post) => (
                 <Post
                    userID={userID}
                    post={post}
                    key={post.post_id}
                    deleteMutation={deleteMutation}
                    socket ={Socket}
                  //   user ={user}
                 />
              ))
            : <div className="empty">User hasn't posted yet. :{`(`}</div>}
      </div>
   );
};

export default Posts;
