import asyncHandler from 'express-async-handler';
import { searchPosts, searchUsers, searchPhotos } from '../models/exploreModel.js';

const searchAllPosts = asyncHandler(async (req, res) => {
    const posts = await searchPosts(req.query.phrase);

    res.status(200).json(posts);
});

const searchAllUsers = asyncHandler(async (req, res) => {
    const users = await searchUsers(req.query.phrase);
    res.status(200).json(users);
});

const searchAllPhotos = asyncHandler(async (req, res) => {
    const photos = await searchPhotos(req.query.phrase);

    res.status(200).json(photos);
});

export { searchAllPosts, searchAllUsers, searchAllPhotos };