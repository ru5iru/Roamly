import React from 'react';
import "./Explore.scss";
import axios from 'axios';
import { useState, useEffect, Fragment } from "react";
import { useLocation } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from '../../axios.js'; // Import your axios instance or equivalent

import Post from "../postComponents/post/Post";

const Explore = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchText = queryParams.get('query');

    // const {
    //     isLoading: searchResultIsLoading,
    //     error: searchError,
    //     data: searchResultData,
    // } = useQuery(["searchresults"], () =>
    //     makeRequest.get(`/explore/query?query=${searchText}`).then((res) => {
    //         return res.data;
    //     })
    // );

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        console.log("getSearchResults");
        try {
            const response = await axios.get(`http://localhost:8000/server/explore?phrase=${searchText}`);
            const jsonData = response.data;
            setPosts(jsonData);
            console.log(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };


    useEffect(() => {
        getPosts();
    }, []);

    return (
        // <div className="explore">
        <Fragment>
            <div className="explore">
                {posts.map((post) => <Post userID={post.user_id} post={post} key={post.post_id} />)}
            </div>
        </Fragment>

        // {/* // </div> */}
    );
};

export default Explore;

