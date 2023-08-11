import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler';

// find badge by id
const findBadgebyId = asyncHandler(async (id) => {
    const sql = 'SELECT * FROM badge_details WHERE badge_id = $1';
    const result = await query(sql, [id]);

    return result.rows[0];
})

// get all badges
const getAllbadges = asyncHandler(async () => {
    const sql = 'SELECT * FROM badge_details';
    const result = await query(sql);

    return result.rows;
})

// get all badges by user
const userBadges = asyncHandler(async (id) => {
    const sql = 'SELECT bd.*, b.user_id FROM badge_details bd LEFT JOIN badges b ON bd.badge_id = b.badge_id AND b.user_id = $1';
    
    const result = await query(sql, [id]);

    return result.rows;
})

// get last 5 badges by user
const lastFiveBadges = asyncHandler(async (id) => {
    const sql = 'SELECT bd.*, b.user_id FROM badge_details bd INNER JOIN badges b ON bd.badge_id = b.badge_id AND b.user_id = $1 ORDER BY b.created_at DESC LIMIT 5';

    const result = await query(sql, [id]);

    return result.rows;
})

export {
    findBadgebyId,
    getAllbadges,
    userBadges,
    lastFiveBadges
}