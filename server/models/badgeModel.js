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
    const sql = 'SELECT bd.*, b.user_id FROM badge_details bd LEFT JOIN badges b ON bd.badge_id = b.badge_id AND b.user_id = $1 ORDER BY bd.badge_id';
    
    const result = await query(sql, [id]);

    return result.rows;
})

// get last 5 badges by user
const lastFiveBadges = asyncHandler(async (id) => {
    const sql = 'SELECT bd.*, b.user_id FROM badge_details bd INNER JOIN badges b ON bd.badge_id = b.badge_id AND b.user_id = $1 ORDER BY b.created_at DESC LIMIT 5';

    const result = await query(sql, [id]);

    return result.rows;
})

// find badge by id, user_id
const findUserBadgebyId = asyncHandler(async (user_id, badge_id) => {
    const sql = 'SELECT * FROM badges WHERE user_id = $1 AND badge_id = $2';
    const result = await query(sql, [user_id, badge_id]);

    return result.rows[0];
})

// add a badge 
const saveBadge = asyncHandler(async (user_id, badge_id) => {
    const sql = 'INSERT INTO badges (user_id, badge_id) VALUES ($1, $2) RETURNING badge_id, user_id';
    const result = await query(sql, [user_id, badge_id]);

    return result.rows[0];
})

// delete a like
const deleteBadge = asyncHandler(async (user_id, badge_id) => {
    const sql = 'DELETE FROM badges WHERE user_id = $1 AND badge_id = $2';
    const result = await query(sql, [user_id, badge_id]);

    return true;
});

export {
    findBadgebyId,
    getAllbadges,
    userBadges,
    lastFiveBadges,
    findUserBadgebyId,
    saveBadge,
    deleteBadge
}