import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./profile.scss";
import Posts from "../../components/postComponents/posts/Posts";
import Badges from "../../components/badgeComponents/badges/Badges";
import Rating from "../../components/ratingComponents/rating/Rating";
import Badge from "../../components/badgeComponents/badge/Badge";
import Update from "../../components/update/Update";
import Interests from "../../components/interests/Interests";
import UserDetails from "../../components/userdetails/UserDetails";
import Allbadges from "../../components/badgeComponents/allbadges/Allbadges";
import Addpost from "../../components/postComponents/addpost/Addpost";
import PostForm from "../../components/postComponents/addpost/PostForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import { useLocation } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";

const Profile = () => {
   const { currentUser } = useContext(AuthContext);
   const [openUpdate, setOpenUpdate] = useState(false);
   const [openBadges, setOpenBadges] = useState(false);
   const [openAddPost, setOpenAddPost] = useState(false);

   const [profileData, setProfileData] = useState([]);
   const [profileNotFound, setProfileNotFound] = useState("Loading");

   const userID = parseInt(useLocation().pathname.split("/")[2]);

   useEffect(() => {
      if (userID) {
         axios
            .get("/users/profile/" + userID)
            .then((response) => {
               setProfileNotFound("Found");
               setProfileData(response.data);
            })
            .catch((error) => {
               setProfileNotFound("Not Found");
            });
      }
   }, [userID]);

   const { isLoading: relationshipsLoading, data: relationshipsData } =
      useQuery(["relationship"], () =>
         makeRequest.get("/relationships?userId=" + userID).then((res) => {
            return res.data;
         })
      );

   const queryClient = useQueryClient();

   const mutation = useMutation(
      (following) => {
         const requestData = {
            user_id: userID,
            follower_id: currentUser.user_id,
         };

         if (following) {
            return makeRequest.delete("/relationships", {
               params: requestData,
            });
         } else {
            return makeRequest.post("/relationships", requestData);
         }
      },
      {
         onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(["relationship"]);
         },
      }
   );

   const handleFollow = () => {
      mutation.mutate(
         relationshipsData.followerArray.includes(currentUser.user_id)
      );
   };

   const expBadge = {
      badge_id: 1,
      badge_name: "star",
      badge_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      badge_img:
         "https://img.icons8.com/fluency-systems-filled/96/ffffff/star.png",
      badge_color: "bg-platinum",
   };

   // const queryClient = useQueryClient();
   const [triggerRefetch, setTriggerRefetch] = useState(false);

   useEffect(() => {
      if (triggerRefetch) {
         setTriggerRefetch(false);
      }
   }, [triggerRefetch]);

   const deleteMutation = useMutation(
      (postId) => {
         const requestData = { post_id: postId };
         return makeRequest.delete("/posts/", { params: requestData });
      },
      {
         onSuccess: () => {
            setTriggerRefetch(true);
         },
      }
   );

   if (profileNotFound === "Not Found") {
      return (
         <div className="profile">
            <div className="notFound">Page Not Found</div>
         </div>
      );
   } else if (profileNotFound === "Loading") {
      return (
         <div className="profile">
            <div className="notFound">
               <PuffLoader
                  color="#000000"
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
               />
            </div>
         </div>
      );
   } else {
      return (
         <div className="profile">
            <div className="images">
               <img className="cover" src={profileData.cover_pic} alt="" />
            </div>
            <div className="profileContainer">
               <div className="uInfo">
                  <div className="left">
                     <div className="profileImg">
                        <img
                           className="profilePic"
                           src={profileData.profile_pic}
                           alt=""
                        />
                        <div className="badge">
                           <Badge badge={expBadge} />
                        </div>
                     </div>

                     <div className="top">
                        <div className="profileName">
                           {profileData.firstname} {profileData.lastname}
                        </div>
                        <div className="followCount">12334 followers</div>
                     </div>
                  </div>
                  <div className="center">
                     <div className="top">
                        <div className="profileName">
                           {profileData.firstname} {profileData.lastname}
                        </div>
                        <div className="userName">@selena_k</div>
                        <div className="followCount">
                           {relationshipsLoading
                              ? "loading"
                              : relationshipsData.count.count}{" "}
                           followers
                        </div>
                     </div>
                     <div className="bottom">
                        {profileData.user_type === "Hotel" ? (
                           <>
                              <div className="head">Rating</div>
                              <div className="container">
                                 <div className="badges">
                                    <Rating rating={3.5} />
                                 </div>
                              </div>
                           </>
                        ) : (
                           <>
                              <div className="head">Achievements</div>
                              <div className="container">
                                 <div className="badges">
                                    <Badges userID={profileData.user_id} />{" "}
                                 </div>
                                 <div className="button">
                                    <button
                                       onClick={() =>
                                          setOpenBadges(!openBadges)
                                       }
                                    >
                                       See More
                                    </button>
                                 </div>
                              </div>
                           </>
                        )}
                     </div>
                  </div>
                  <div className="right">
                     {relationshipsLoading ? (
                        "loading"
                     ) : profileData.user_id === currentUser.user_id ? (
                        <div className="updateBtn">
                           <button onClick={() => setOpenUpdate(!openUpdate)}>
                              <span>
                                 <img
                                    src="https://img.icons8.com/sf-black-filled/64/edit.png"
                                    alt="edit"
                                 />
                              </span>
                              <span>Edit Profile</span>
                           </button>
                        </div>
                     ) : (
                        <div className="followMsg">
                           <div className="follow">
                              <button onClick={handleFollow}>
                                 <span>
                                    <img
                                       src="https://img.icons8.com/ios-glyphs/90/ffffff/add.png"
                                       alt="add"
                                    />
                                 </span>
                                 <span>
                                    {relationshipsData.followerArray.includes(
                                       currentUser.user_id
                                    )
                                       ? "Following"
                                       : "Follow"}
                                 </span>
                              </button>
                           </div>
                           <div className="message">
                              <button>
                                 <span>
                                    <img
                                       src="https://img.icons8.com/material-rounded/24/ffffff/chat.png"
                                       alt="chat"
                                    />
                                 </span>
                                 <span>Message</span>
                              </button>
                           </div>
                        </div>
                     )}
                  </div>
               </div>
               <div className="profileBottom">
                  <div className="left">
                     {profileData.user_type === "Hotel" ? (
                        <UserDetails />
                     ) : (
                        <Interests userID={userID} />
                     )}
                     <div className="uploads">
                        <div className="uploadsHeadContainer">
                           <div className="uploadsHead">Photos</div>
                           <div className="seeMore">See More Photos</div>
                        </div>
                        <div className="uploadContainer">
                           <div className="upload">
                              <img
                                 src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                 alt=""
                              />
                           </div>
                           <div className="upload">
                              <img
                                 src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                 alt=""
                              />
                           </div>
                           <div className="upload">
                              <img
                                 src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                 alt=""
                              />
                           </div>
                           <div className="upload">
                              <img
                                 src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                 alt=""
                              />
                           </div>
                           <div className="upload">
                              <img
                                 src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                 alt=""
                              />
                           </div>
                           <div className="upload">
                              <img
                                 src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                 alt=""
                              />
                           </div>
                           <div className="upload">
                              <img
                                 src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                 alt=""
                              />
                           </div>
                           <div className="upload">
                              <img
                                 src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                 alt=""
                              />
                           </div>
                           <div className="upload">
                              <img
                                 src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                 alt=""
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="right">
                     {profileData.user_id === currentUser.user_id ? (
                        <Addpost setOpenAddPost={setOpenAddPost} />
                     ) : (
                        ""
                     )}
                     <Posts
                        userID={profileData.user_id}
                        deleteMutation={deleteMutation}
                     />
                  </div>
               </div>
            </div>
            {openUpdate && <Update setOpenUpdate={setOpenUpdate} />}
            {openBadges && (
               <Allbadges
                  userID={profileData.user_id}
                  setOpenBadges={setOpenBadges}
               />
            )}
            {openAddPost && (
               <PostForm
                  setOpenAddPost={setOpenAddPost}
                  setTriggerRefetch={setTriggerRefetch}
               />
            )}
         </div>
      );
   }
};

export default Profile;
