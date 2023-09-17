import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler';

// find post by id
const getPost = asyncHandler(async (id) => {
    const sql = 'SELECT * FROM post WHERE post_id = $1';
    const result = await query(sql, [id]);

    return result.rows[0];
})

// find post is exists by user id
const isPostExistsByID = asyncHandler(async (id) => {
    const sql = 'SELECT * FROM post WHERE post_id = $1';
    const result = await query(sql, [id]);

    return result.rowCount > 0;
});

// get all posts by user
const getUserPosts = asyncHandler(async (id) => {
    const sql = 'SELECT * FROM post WHERE user_id = $1 ORDER BY created_at DESC';
    
    const result = await query(sql, [id]);

    return result.rows;
});

// get all posts
const getAllPosts = asyncHandler(async () => {
    const sql = 'SELECT * FROM post ORDER BY created_at DESC';
    
    const result = await query(sql);

    return result.rows;
});

// search all posts
const searchPosts = asyncHandler(async (phrase) => {
    const searchString = "%" + phrase + "%";
    const sql = 'SELECT * FROM post WHERE content LIKE $1 ORDER BY created_at DESC';
    
    const result = await query(sql, [searchString]);

    return result.rows;
});


// add post
const savePost = asyncHandler(async (user_id, content) => {

    const image = null;

    function generateRandomPostID( user_id ){
        let randomID = Math.floor(Math.random() * 90000) + 10000;
        return parseInt(user_id.toString() + randomID.toString())
    }

    let randomPostID = generateRandomPostID(user_id);

    while(!isPostExistsByID(randomPostID)){
        randomPostID = generateRandomPostID(user_id);
    }

    const sql = 'INSERT INTO post (post_id, user_id, image, content) VALUES ($1, $2, $3, $4) RETURNING post_id, user_id';
    const result = await query(sql, [randomPostID, user_id, image, content]);

    return result;
});

// delete post
const deletePost = asyncHandler(async (post_id) => {
    const sql = 'DELETE FROM post WHERE post_id = $1';
    const result = await query(sql, [post_id]);

    return true;
});

export {
    getPost,
    getAllPosts,
    getUserPosts,
    savePost,
    deletePost,
    searchPosts
}