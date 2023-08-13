import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const [searchText, setSearchText] = useState('');

    const searchKeyClick = () => {
        document.getElementById("search-bar").classList.toggle('show-search');
    }

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const navigateFeed = () => {
        navigate("/feed");
    };

    const handleSearch = () => {
        // Your search logic here using the searchText
        console.log('Searching for:', searchText);

        // Redirect to another page with the search query as a parameter
        navigate(`/explore?query=${searchText}`);
    };

    return (
        <div className="navbar">
            <div className="left">
                <img src={logo} alt="" className="logo" onClick={navigateFeed}/>
            </div>
            <div className="right">
                {/* < Search_component /> */}
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
                            <img src={Search_blue} type="submit" className="search-button-b" onClick={handleSearch} />
                        </div>
                        <img
                            src={Search}
                            className="search-button"
                            id="search-button"
                            onClick={searchKeyClick}
                            alt="Search Icon"
                        />
                    </form>
                </div>
                <img src={Chat} alt="" />
                <img src={Notification} alt="" />
                <img src={currentUser.profile_pic} alt="" className="usr_pic" onClick={handleProfileClick} />
            </div>
        </div>
    );
};

export default Navbar;
