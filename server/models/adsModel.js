import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler';

// get all ads
const getAllAds = asyncHandler(async () => {
    const sql = 'SELECT * FROM advertisement';
    const result = await query(sql);

    return result.rows;
});

// // get all ads by user
// const getUserAds = asyncHandler(async (ad_id) => {
//     const sql = 'SELECT * FROM advertisement WHERE user_id = $1 ORDER BY created_at DESC';
//     const result = await query(sql, [ad_id]);

//     return result.rows;
// });

// add ad
// const saveAd = asyncHandler(async (service_type, title, description, details  ) => {

//     // const created_at = new Date(); // Current timestamp
//     const ad_id = Math.floor(Math.random() * 1000000000);
//     const user_id = 1;

//     const sql = 'INSERT INTO advertisements (service_type, title, description, details) VALUES ($1, $2, $3, $4) RETURNING ad_id, user_id';
//     const result = await query(sql, [service_type, title, description, details]);

//     return result;
// });

const saveAd = asyncHandler(async (service_type, title, description, details  ) => {

    const ad_id = Math.floor(Math.random() * 1000000000);
    const user_id = 2;

    const sql = 'INSERT INTO advertisement (user_id, ad_id, service_type, title, description, details) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const result = await query(sql, [user_id, ad_id, service_type, title, description, details]);
  
    return result;
  });

export { getAllAds, saveAd };