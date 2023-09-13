import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./navbar.scss";
import Chat from "../../assets/Chat.png";
import Notification from "../../assets/Notification.png";
import Search from "../../assets/search.png";
import Search_blue from "../../assets/blue_search.png";
import Profile_pic from "../../assets/profile_pic.png";
import logo from "../../assets/Roamly.png";
import Search_component from "../search/search.jsx";

import { AuthContext } from "../../context/authContext";

const Navbar = () => {
   const { currentUser } = useContext(AuthContext);

   const navigate = useNavigate(); // Initialize useNavigate

   const handleProfileClick = () => {
      // Navigate to the home page when the Home menu item is clicked
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
      // Your search logic here using the searchText
      console.log("Searching for:", searchText);

      // Redirect to another page with the search query as a parameter
      navigate(`/explore?query=${searchText}`);
   };

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
            <img className="navimg" src={Notification} alt="" />
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
                  <div className="itemContainer">
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
