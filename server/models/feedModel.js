import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler';

// get all ads
const getAllFeed = asyncHandler(async () => {
    const sql = 'SELECT post.*,users.firstname,users.lastname,users.profile_pic FROM post INNER JOIN users ON post.user_id = users.user_id ORDER BY post.created_at DESC';
    const result = await query(sql);

    return result.rows;
});

export { getAllFeed };  