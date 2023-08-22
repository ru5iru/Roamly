import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./profile.scss";
import Posts from "../../components/postComponents/posts/Posts";
import Badges from "../../components/badgeComponents/badges/Badges";
import Badge from "../../components/badgeComponents/badge/Badge";
import Update from "../../components/update/Update";
import Interests from "../../components/interests/Interests";
import Allbadges from "../../components/badgeComponents/allbadges/Allbadges";
import Addpost from "../../components/postComponents/addpost/Addpost";
import PostForm from "../../components/postComponents/addpost/PostForm";
import { useMutation, useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import { useLocation } from "react-router-dom";

const Profile = () => {
   const { currentUser } = useContext(AuthContext);
   const [openUpdate, setOpenUpdate] = useState(false);
   const [openBadges, setOpenBadges] = useState(false);
   const [openAddPost, setOpenAddPost] = useState(false);

   const[profileData, setProfileData] = useState([])

   const userID = parseInt(useLocation().pathname.split("/")[2]);

   useEffect(() => {
      if (userID) {
        axios.get('/users/profile/' + userID).then(response => {
         setProfileData(response.data);
        });
      }
    }, [userID]);

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
                           <div className="followCount">12334 followers</div>
                        </div>
                        <div className="bottom">
                           <div className="head">Achievements</div>
                           <div className="container">
                              <div className="badges">
                                 <Badges userID={profileData.user_id}/>
                              </div>
                              <div className="button">
                                 <button
                                    onClick={() => setOpenBadges(!openBadges)}
                                 >
                                    See More
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="right">
                        {profileData.user_id === currentUser.user_id ? (
                           <div className="updateBtn">
                              <button
                                 onClick={() => setOpenUpdate(!openUpdate)}
                              >
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
                                 <button>
                                    <span>
                                       <img
                                          src="https://img.icons8.com/ios-glyphs/90/ffffff/add.png"
                                          alt="add"
                                       />
                                    </span>
                                    <span>Follow</span>
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
                        <Interests userID={userID}/>
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
                        <Posts userID={profileData.user_id} deleteMutation={deleteMutation}/>
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
               {openAddPost && <PostForm setOpenAddPost={setOpenAddPost} setTriggerRefetch={setTriggerRefetch} />}
      </div>
   );
};

export default Profile;