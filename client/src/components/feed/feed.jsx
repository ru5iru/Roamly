import React from 'react';
import "./feed.scss";
import axios from 'axios';
import { useState, useEffect, Fragment } from "react";
import { useLocation } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from '../../axios.js'; // Import your axios instance or equivalent

import Post from "../postComponents/post/Post";

const Feedcontent = ({socket}) => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/server/feed`);
            const jsonData = response.data;
            setPosts(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };


    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Fragment>
            <div className="feed">
                {posts.map((post) => <Post userID={post.user_id} post={post} key={post.post_id} socket={socket} />)}
            </div>
        </Fragment>
    );
};

export default Feedcontent;

