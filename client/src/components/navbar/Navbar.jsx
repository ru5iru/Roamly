import React, { useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./navbar.scss";
import Chat from "../../assets/Chat.png";
import Notification from "../../assets/Notification.png";
import Search from "../../assets/search.png";
import Search_blue from "../../assets/blue_search.png";
import logo from "../../assets/Roamly.png";

import { AuthContext } from "../../context/authContext";

const Navbar = ({socket}) => {
   const { currentUser, logout } = useContext(AuthContext);
   const [open,setOpen]= useState(false);
   const [notifications,setNotifications]=useState([]);

   useEffect(()=>{
      socket?.on("getNotification",(data)=>{
         setNotifications((prev)=>[...prev,data]);
      })
   },[socket]);


   const navigate = useNavigate();

   const handleProfileClick = () => {
      navigate("/profile/" + currentUser.user_id);
   };

   const [searchText, setSearchText] = useState("");
   const [userMenuOpen, setUserMenuOpen] = useState(false);

   const searchKeyClick = () => {
      document.getElementById("search-bar").classList.toggle("show-search");
   };

   const handleInputChange = (e) => {
      setSearchText(e.target.value);
   };

   const navigateFeed = () => {
      navigate("/feed");
   };

   const handleSearch = () => {
      navigate(`/explore?query=${searchText}`);
   };

   const handleLogout = async () => {
      logout();
      navigate("/");
   }

   const displayNotification = ({senderName,type})=>{
      let action;

      if(type===1){
         action="liked"
      }else {
         action="commented"
      }

      return(
         <span className="notification">{`${senderName} ${action} your post`}</span>
      )
   }

   const handleRead=()=>{
      setNotifications([]);
      setOpen(false);
   }

   return (
      <div className="navbar">
         <div className="left">
            <img
               src={logo}
               alt="Roamly Logo"
               className="logo navimg"
               onClick={navigateFeed}
            />
         </div>
         <div className="right">
            <div className="search-container">
               <form className="search" id="search-bar">
                  <div className="display-flex-row height-100 align-items-center padding-left-3">
                     <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                        value={searchText}
                        onChange={handleInputChange}
                        id="searchId"
                     />
                     <img
                        src={Search_blue}
                        type="submit"
                        className="search-button-b navimg"
                        onClick={handleSearch}
                        alt="search"
                     />
                  </div>
                  <img
                     src={Search}
                     className="search-button navimg"
                     id="search-button"
                     onClick={searchKeyClick}
                     alt="Search Icon"
                  />
               </form>
            </div>
            <img className="navimg" src={Chat} alt="" />
            <div className="count" onClick={()=>setOpen(!open)}>
               <img className="navimg" src={Notification} alt="" />
               {
                  notifications.length>0 &&
                  <div className="counter">{notifications.length}</div>
               }
            </div>

            {open && (
               <div className="notifications">
                  {notifications.map((n)=>displayNotification(n))}
                  <button className="nButton" onClick={handleRead}>
                     Mark as read

                  </button>
               </div>
            )}
            <img
               src={currentUser.profile_pic}
               alt=""
               className="usr_pic navimg"
               onClick={() => setUserMenuOpen(!userMenuOpen)}
            />
            {userMenuOpen && (
               <div className="userMenu">
                  <div className="userNav" onClick={handleProfileClick}>
                     <div className="userImg">
                        <img src={currentUser.profile_pic} alt="" />
                     </div>
                     <div className="userName">
                        {currentUser.firstname} {currentUser.lastname}
                     </div>
                  </div>
                  <div className="itemContainer" onClick={() => handleLogout()}>
                     <div className="itemIcon">
                        <img
                           src="https://img.icons8.com/ios-glyphs/60/aaaaaa/exit.png"
                           alt="exit"
                        />
                     </div>
                     <div className="itemLabel">Logout</div>
                  </div>
                  <div className="itemContainer">
                     <div className="itemIcon">
                        <img
                           src="https://img.icons8.com/ios-glyphs/60/aaaaaa/help.png"
                           alt="exit"
                        />
                     </div>
                     <div className="itemLabel">FAQ</div>
                  </div>

                  <img
                     className="closeImg"
                     onClick={() => setUserMenuOpen(!userMenuOpen)}
                     src="https://img.icons8.com/material-outlined/96/777777/cancel--v1.png"
                     alt="cancel--v1"
                  />
               </div>
            )}
         </div>
      </div>
   );
};

export default Navbar;