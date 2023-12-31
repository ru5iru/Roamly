import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/authContext";
import { formatCreatedAt } from "../../../utils/timeCalc";
import { makeRequest } from "../../../axios";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";

const Post = ({ userID, post, deleteMutation,socket }) => {
   const { currentUser } = useContext(AuthContext);
   const [liked,setLiked] = useState(false)
    

   const [commentOpen, setCommentOpen] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);
   const [postProfileData, setPostProfileData] = useState([]);

   const setImageUrl = (currUrl) => {
      if (currUrl !== null && currUrl.length > 50) {
         return currUrl;
      } else if (currUrl !== null) {
         try {
            return require("../../../../public/upload/" + currUrl);
         } catch {
            
         }
      }
   }

   const {
      isLoading: likeIsLoading,
      error: likeError,
      data: likeData,
   } = useQuery(["likes", post.post_id], () =>
      makeRequest.get(`/likes?postId=${post.post_id}`).then((res) => {
         return res.data;
      })
   );

   useEffect(() => {
      if (userID) {
         axios.get("/users/profile/" + userID).then((response) => {
            setPostProfileData(response.data);
         });
      }
   }, [userID]);

   const queryClient = useQueryClient();

   const mutation = useMutation(
      (liked) => {
         const requestData = {
            user_id: currentUser.user_id,
            post_id: post.post_id,
         };

         if (liked) {
            return makeRequest.delete("/likes", { params: requestData });
         } else {
            return makeRequest.post("/likes", requestData);
         }
      },
      {
         onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(["likes"]);
         },
      }
   );

   const handleLike = () => {
      mutation.mutate(likeData.likeArray.includes(currentUser.user_id));
   };

   const handleDelete = () => {
      deleteMutation.mutate(post.post_id);
   };

   let imgSource = "";
   if (post.image != null && post.image.length > 50) {
      imgSource = post.image;
   } else if (post.image != null) {
      try {
         imgSource = require("../../../../public/upload/" + post.image);
      } catch {
         
      }
   }

   const handleNotification = (type) =>{
    type === 1 && setLiked(true);
    socket?.emit("sendNotification", {
        senderName:currentUser.firstname+" "+currentUser.lastname,
        receiverEmail:postProfileData.email,
        type,

    })
    
}

   return (
      <div className="post">
         <div className="container">
            <div className="user">
               <div className="userInfo">
                  <img src={postProfileData.profile_pic ? setImageUrl(postProfileData.profile_pic) : ""} alt="" />
                  <div className="details">
                     <Link
                        to={`/profile/${post.user_id}`}
                        style={{
                           textDecoration: "none",
                           color: "inherit",
                        }}
                     >
                        <span className="name">
                           {postProfileData.firstname}{" "}
                           {postProfileData.lastname}
                        </span>
                     </Link>
                     <span className="date">
                        {formatCreatedAt(post.created_at)}
                     </span>
                  </div>
               </div>
               <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} />
               {menuOpen && (
                  <div className="postMenu">
                     {post.user_id === currentUser.user_id ? (
                        <div className="sameUser">
                           <button className="edit">
                              <span>
                                 <img
                                    src="https://img.icons8.com/ios-glyphs/90/ffffff/pencil--v1.png"
                                    alt="pencil--v1"
                                 />
                              </span>
                              <span>Edit Post</span>
                           </button>
                           <button className="delete" onClick={handleDelete}>
                              <span>
                                 <img
                                    src="https://img.icons8.com/ios-glyphs/90/ffffff/trash--v1.png"
                                    alt="trash--v1"
                                 />
                              </span>
                              <span>Delete Post</span>
                           </button>
                        </div>
                     ) : (
                        <div className="visitor">
                           <button className="save">
                              <span>
                                 <img
                                    src="https://img.icons8.com/ios-glyphs/90/ffffff/bookmark-ribbon.png"
                                    alt="bookmark-ribbon"
                                 />
                              </span>
                              <span>Save Post</span>
                           </button>
                           <button className="report">
                              <span>
                                 <img
                                    src="https://img.icons8.com/ios-glyphs/90/ffffff/warning-shield.png"
                                    alt="warning-shield"
                                 />
                              </span>
                              <span>Report Post</span>
                           </button>
                        </div>
                     )}

                     <img
                        className="closeImg"
                        onClick={() => setMenuOpen(!menuOpen)}
                        src="https://img.icons8.com/material-outlined/96/cancel--v1.png"
                        alt="cancel--v1"
                     />
                  </div>
               )}
            </div>
            <div className="content">
               <p>{post.content}</p>
               {post.image !== null && <img src={setImageUrl(post.image)} alt="" />}
            </div>
            <hr />
            <div className="info">
               <div className="item">
                  {likeIsLoading ? (
                     "loading"
                  ) : likeData.likeArray.includes(currentUser.user_id) ? (
                     <FavoriteOutlinedIcon
                        style={{ color: "#FF2171" }}
                        onClick={handleLike}
                     />
                  ) : (
                    <FavoriteBorderOutlinedIcon onClick={() => {
                        handleLike();
                        handleNotification(1);
                      }} />
                  )}
                  {!likeIsLoading ? likeData.count.count : "loading"} Likes
               </div>
               <div
                  className="item"
                  onClick={() => setCommentOpen(!commentOpen)}
               >
                  <ChatBubbleOutlinedIcon />
                  12 Comments
               </div>
               <div className="item">
                  <ShareOutlinedIcon />
                  Share
               </div>
            </div>
            {commentOpen && <Comments />}
         </div>
      </div>
   );
};

export default Post;
