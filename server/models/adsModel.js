import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler';

// get all ads
const getAllAds = asyncHandler(async () => {
    const sql = 'SELECT * FROM advertisement';
    const result = await query(sql);

    return result.rows;
});

export { getAllAds };  