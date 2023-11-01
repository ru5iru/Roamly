import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler';
import { findUserBadgebyId, saveBadge } from './badgeModel.js';

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

// find post is exists by user id
const getLikesCount2 = asyncHandler(async (id) => {
    const sql = 'SELECT COUNT(user_id) FROM likes WHERE post_id = $1';
    const result = await query(sql, [id]);

    return result.rows[0].count;
});

// add a like
const saveLike = asyncHandler(async (user_id, post_id) => { 
    const sql = 'INSERT INTO likes (user_id, post_id) VALUES ($1, $2) RETURNING post_id, user_id';
    const result = await query(sql, [user_id, post_id]);

    if(!await findUserBadgebyId(user_id, 35) && await getLikesCount2(post_id) >= 10){
        await saveBadge(user_id, 35);
    } else if (!await findUserBadgebyId(user_id, 34) && await getLikesCount2(post_id) >= 25){
        await saveBadge(user_id, 34);
    } else if (!await findUserBadgebyId(user_id, 33) && await getLikesCount2(post_id) >= 50){
        await saveBadge(user_id, 33);
    }

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
    deleteLike,

}