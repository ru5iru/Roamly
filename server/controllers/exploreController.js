import asyncHandler from 'express-async-handler';
import { searchPosts, searchUsers, searchPhotos } from '../models/exploreModel.js';

const searchAllPosts = asyncHandler(async (req, res) => {
    const posts = await searchPosts(req.query.phrase);

    // if (posts.length > 0) {
    res.status(200).json(posts);
    // } else {
    //     res.status(404);
    //     throw new Error("Posts not found");
    // }
});

const searchAllUsers = asyncHandler(async (req, res) => {
    const users = await searchUsers(req.query.phrase);
    // console.log(users);
    // if (users.length > 0) {
    res.status(200).json(users);
    // } else {
    //     res.status(404);
    //     throw new Error("Users not found");
    // }
});

const searchAllPhotos = asyncHandler(async (req, res) => {
    const photos = await searchPhotos(req.query.phrase);

    // if (photos.length > 0) {
    res.status(200).json(photos);

    // } else {
    //     res.status(404);
    //     throw new Error("Photos not found");
    // }
});

export { searchAllPosts, searchAllUsers, searchAllPhotos };