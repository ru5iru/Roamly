import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler';

// find post by id
const getLikes = asyncHandler(async (id) => {
    const sql = 'SELECT user_id FROM likes WHERE post_id = $1';
    const result = await query(sql, [id]);

    return result.rows;
})

// find post is exists by user id
const getLikesCount = asyncHandler(async (id) => {
    const sql = 'SELECT COUNT(user_id) FROM likes WHERE post_id = $1';
    const result = await query(sql, [id]);

    return result.rows[0];
});

// add a like
const saveLike = asyncHandler(async (user_id, post_id) => {
    const sql = 'INSERT INTO likes (user_id, post_id) VALUES ($1, $2) RETURNING post_id, user_id';
    const result = await query(sql, [user_id, post_id]);

    return result;
});

// delete a like
const deleteLike = asyncHandler(async (user_id, post_id) => {
    const sql = 'DELETE FROM likes WHERE user_id = $1 AND post_id = $2';
    const result = await query(sql, [user_id, post_id]);

    return true;
});

export {
    getLikes,
    getLikesCount,
    saveLike,
    deleteLike
}