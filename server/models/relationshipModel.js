import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler';

// find followers by user id
const getFollowers = asyncHandler(async (id) => {
    const sql = 'SELECT follower_id FROM relationships WHERE user_id = $1';
    const result = await query(sql, [id]);

    return result.rows;
})

// get follower count
const getFollowersCount = asyncHandler(async (id) => {
    const sql = 'SELECT COUNT(follower_id) FROM relationships WHERE user_id = $1';
    const result = await query(sql, [id]);

    return result.rows[0];
});

// follow a user
const saveFollow = asyncHandler(async (user_id, follower_id) => {
    const sql = 'INSERT INTO relationships (user_id, follower_id) VALUES ($1, $2) RETURNING follower_id, user_id';
    const result = await query(sql, [user_id, follower_id]);

    return result;
});

// unfollow a user
const deleteFollow = asyncHandler(async (user_id, follower_id) => {
    const sql = 'DELETE FROM relationships WHERE user_id = $1 AND follower_id = $2';
    const result = await query(sql, [user_id, follower_id]);

    return true;
});

export {
    getFollowers,
    getFollowersCount,
    saveFollow,
    deleteFollow
}