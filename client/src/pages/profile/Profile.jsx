import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./profile.scss";
import Posts from "../../components/postComponents/posts/Posts";
import Badges from "../../components/badgeComponents/badges/Badges";
import Rating from "../../components/ratingComponents/rating/Rating";
import Badge from "../../components/badgeComponents/badge/Badge";
import Update from "../../components/update/Update";
import UpdatePP from "../../components/update/UpdatePP";
import UpdateCP from "../../components/update/UpdateCP";
import Interests from "../../components/interests/Interests";
import UserDetails from "../../components/userdetails/UserDetails";
import Allbadges from "../../components/badgeComponents/allbadges/Allbadges";
import Addpost from "../../components/postComponents/addpost/Addpost";
import PostForm from "../../components/postComponents/addpost/PostForm";
import NotFound from "../../components/notfound/NotFound";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";
import BucketList from "../../components/badgeComponents/bucketList/BucketList";
import { Socket } from "socket.io-client";

const Profile = ({socket}) => {
   const { currentUser } = useContext(AuthContext);
   const [profilePic, setProfilePic] = useState("");
   const [coverPic, setCoverPic] = useState("");
   const [openUpdate, setOpenUpdate] = useState(false);
   const [openUpdatePP, setOpenUpdatePP] = useState(false);
   const [openUpdateCP, setOpenUpdateCP] = useState(false);
   const [openBadges, setOpenBadges] = useState(false);
   const [openAddPost, setOpenAddPost] = useState(false);
   const [openBucketList, setOpenBucketList] = useState(false);
   const [ratingsData, setRatingsData] = useState([]);
   const [profileData, setProfileData] = useState([]);
   const [imagesData, setImagesData] = useState([]);
   const [profileNotFound, setProfileNotFound] = useState("Loading");
   const [error, setError] = useState(null);

   const userID = parseInt(useLocation().pathname.split("/")[2]);

   const setImageUrl = (currUrl) => {
      if (currUrl !== null && currUrl.length > 50) {
         return currUrl;
      } else if (currUrl !== null) {
         try {
            return require("../../../public/upload/" + currUrl);
         } catch {}
      }
   };

   const getRatings = async (userID) => {
      try {
         const response = await axios.get(`/ratings/avg?service_id=${userID}`);
         const jsonData = response.data;
         setRatingsData(jsonData);
      } catch (error) {
         console.error(error.message);
      }
   };

   useEffect(() => {
      if (userID) {
         axios
            .get("/users/profile/" + userID)
            .then((response) => {
               setProfileNotFound("Found");
               setProfileData(response.data);
               setProfilePic(setImageUrl(response.data.profile_pic));
               setCoverPic(setImageUrl(response.data.cover_pic));
            })
            .catch((error) => {
               setProfileNotFound("Not Found");
            });
      }
      getRatings(userID);
   }, [userID]);

   console.log(ratingsData)

   useEffect(() => {
      if (userID) {
         axios
            .get(`/posts/photos?userId=${userID}`)
            .then((response) => {
               setImagesData(response.data);
            })
            .catch((error) => {
               setError("Error fetching badges");
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
      badge_img: "https://img.icons8.com/ios-filled/100/777777/camera--v3.png",
      badge_color: "bg-platinum",
   };

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

   const navigate = useNavigate();

   const navigateFeed = () => {
      navigate("/feed");
   };

   const handleServiceClick = () => {
      navigate("/ratings/" + userID);
   };

   const stack = [];

   imagesData.length > 0 ? (
      imagesData.forEach((image, index) => {
         let element = "";

         if (image.image !== null && image.image.length > 50) {
            element = (
               <div className="upload" key={index}>
                  <img src={image.image} alt="" />
               </div>
            );
         } else if (image.image !== null) {
            element = (
               <div className="upload" key={index}>
                  <img
                     src={require("../../../public/upload/" + image.image)}
                     alt=""
                  />
               </div>
            );
         }
         stack.push(element);
      })
   ) : (
      <div className="empty" key={1}>
         User hasn't posted yet. :{`(`}
      </div>
   );

   if (profileNotFound === "Not Found") {
      return (
         <div className="profile">
            <NotFound />
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
               <img className="cover" src={coverPic} alt="" />
               {profileData.user_id === currentUser.user_id ? (
                  <div className="badge">
                     <div
                        className="upp-container"
                        onClick={() => setOpenUpdateCP(!openUpdateCP)}
                     >
                        <div className="upp-circle">
                           <div className="upp-content">
                              <img
                                 className="upp-img"
                                 src={expBadge.badge_img}
                                 alt=""
                              />
                              Edit Cover Photo
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  ""
               )}
            </div>
            <div className="profileContainer">
               <div className="uInfo">
                  <div className="left">
                     <div className="profileImg">
                        <img className="profilePic" src={profilePic} alt="" />
                        {profileData.user_id === currentUser.user_id ? (
                           <div className="badge">
                              <div
                                 className="upp-container"
                                 onClick={() => setOpenUpdatePP(!openUpdatePP)}
                              >
                                 <div className="upp-circle">
                                    <div className="upp-content">
                                       <img
                                          className="upp-img"
                                          src={expBadge.badge_img}
                                          alt=""
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ) : (
                           ""
                        )}
                     </div>

                     <div className="top">
                        <div className="profileName">
                           {profileData.firstname} {profileData.lastname}
                        </div>
                        <div className="followCount">
                           {relationshipsLoading
                              ? "loading"
                              : relationshipsData.count.count}{" "}
                           followers
                        </div>
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
                        {profileData.user_type !== "Traveller" ? (
                           <>
                              <div className="head">Rating</div>
                              <div className="container">
                                 <div className="badges">
                                    <Rating rating={ratingsData.avg} count={ratingsData.count} />
                                 </div>
                                 <div className="button">
                                    <button onClick={handleServiceClick}>
                                       See More
                                    </button>
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
                           <button onClick={() => setOpenBucketList(!openBucketList)}>
                              <span>
                                 <img
                                    src="https://img.icons8.com/sf-black-filled/64/edit.png"
                                    alt="edit"
                                 />
                              </span>
                              <span>Bucket List</span>
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
                     {profileData.user_type !== "Traveller" ? (
                        <UserDetails />
                     ) : (
                        <Interests userID={userID} />
                     )}
                     <div className="uploads">
                        <div className="uploadsHeadContainer">
                           <div className="uploadsHead">Photos</div>
                           <div className="seeMore">See More Photos</div>
                        </div>
                        <div className="uploadContainer">{stack}</div>
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
                        socket={socket}
                     />
                  </div>
               </div>
            </div>
            {openUpdate && <Update setOpenUpdate={setOpenUpdate} />}
            {openBucketList && <BucketList userID={userID} setOpenBucketList={setOpenBucketList} setTriggerRefetch={setTriggerRefetch} />}
            {openUpdatePP && (
               <UpdatePP
                  profilePic={profilePic}
                  setOpenUpdatePP={setOpenUpdatePP}
                  setTriggerRefetch={setTriggerRefetch}
               />
            )}
            {openUpdateCP && (
               <UpdateCP
                  coverPic={coverPic}
                  setOpenUpdateCP={setOpenUpdateCP}
                  setTriggerRefetch={setTriggerRefetch}
               />
            )}
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
