import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, Fragment } from "react";


const Explore = () => {
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const searchText = queryParams.get('query');

    // const getSearchResults = async () => {
    //     // Your search logic here using the searchText
    //     console.log('Searching for:', searchText);
    //     try {
    //         const res = await fetch(`/api/search/${searchText}`, {
    //             method: "GET",
    //             headers: { token: localStorage.token }
    //         });

    //         const parseData = await res.json();
    //         console.log(parseData);
    //     }
    //     catch (err) {
    //         console.error(err.message);
    //     }
    // };





    return (
        <div>
            {/* <p>Search query: {searchText}</p> */}
        </div>
    );
};

export default Explore;
