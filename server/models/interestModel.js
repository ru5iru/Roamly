import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler';

// get all interests
const getAllInterests = asyncHandler(async () => {
    const sql = 'SELECT * FROM interest_details';
    const result = await query(sql);

    return result.rows;
});

// get all interests by user
const getUserInterests = asyncHandler(async (id) => {
    const sql = 'SELECT id.*, i.user_id FROM interest_details id INNER JOIN interests i ON id.interest_id = i.interest_id AND i.user_id = $1';
    
    const result = await query(sql, [id]);

    return result.rows;
})

export { getAllInterests, getUserInterests}