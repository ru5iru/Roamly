// 

import React, { useState, useEffect, Fragment } from 'react';
import "./Explore.scss";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from '../../axios.js';
import Post from "../postComponents/post/Post";
import UserProfile from './Explore_people';

const Explore = ({ activeStep }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchText = queryParams.get('query');


    // const [activeStep, setActiveStep] = useState(1);
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/server/explore?phrase=${searchText}`);
            const jsonData = response.data;
            setPosts(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    const getUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/server/explore/users?phrase=${searchText}`);
            const jsonData = response.data;
            if (jsonData.length > 0) {
                setUsers(jsonData);
            } else {
                const no_of_results = 0;
                // Handle the case where jsonData is empty
                console.log("No users found.");
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    const getPhotos = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/server/explore/photos?phrase=${searchText}`);
            const jsonData = response.data;
            setPosts(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (activeStep === 1) {
            getPosts();
        } else if (activeStep === 2) {
            getUsers();
        } else if (activeStep === 3) {
            getPhotos();
        }

        // Clear the previous content when Explore is called again
        return () => {
            setPosts([]);
            setUsers([]);
        };
    }, [activeStep, searchText]);

    return (
        <div>
            {activeStep === 0 &&
                <div className="Not_serched">
                    Your Search Results Will Appear Here
                </div>}
            <Fragment>
                <div style={{ display: "block" }}>
                    <div className="explore">
                        {activeStep === 1 && posts.map((post) => <Post userID={post.user_id} post={post} key={post.post_id} />)}
                        {activeStep === 2 && users.map((user) => (<UserProfile user={user} />))}
                        {activeStep === 3 && posts.map((post) => <Post userID={post.user_id} post={post} key={post.post_id} />)}
                    </div>
                </div>
            </Fragment>
        </div>

    );
};

export default Explore;
