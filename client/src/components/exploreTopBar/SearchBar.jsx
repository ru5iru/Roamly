import React, { useState } from "react";
import Search_blue from "../../assets/Search_black.png";
import { useNavigate } from "react-router-dom";
import "./ExploreTopBar.scss";


const SearchBar = () => {

    const navigate = useNavigate(); // Initialize useNavigate


    const [searchText, setSearchText] = useState('');

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearch = () => {
        navigate(`/explore?query=${searchText}`);
        console.log('Searching for:', searchText);
    };


    return (
        <div className="leftBar">

            <div className="searchbar">
                <form>
                    <div className="searchDiv">
                        <input
                            type="text"
                            placeholder="Search.."
                            name="search"
                            value={searchText}
                            onChange={handleInputChange}
                            id="searchId"
                            className="search-input"
                        />
                        <div className="search-button">
                            <img src={Search_blue} type="submit" className="search-button-b" onClick={handleSearch} />
                        </div>
                    </div>
                </form>
            </div>

        </div >



    );
};

export default SearchBar;
