import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler';

// get all ads
const getAllAds = asyncHandler(async () => {
    const sql = 'SELECT * FROM advertisement';
    const result = await query(sql);

    return result.rows;
});

const saveAd = asyncHandler(async (title, description, details) => {
    const user_id = 2;
    const service_type = "hotel";

    const sql = 'INSERT INTO advertisement (user_id, service_type title, description, details) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const result = await query(sql, [user_id, service_type, title, description, details]);
  
    return result;
  });

  // delete post
const deleteAd = asyncHandler(async (post_id) => {
  const sql = 'DELETE FROM advertisement WHERE ad_id = $1';
  const result = await query(sql, [ad_id]);

  return true;
});

export { getAllAds, saveAd, deleteAd };