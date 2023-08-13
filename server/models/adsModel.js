import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler';

// get all ads
const getAllAds = asyncHandler(async () => {
    const sql = 'SELECT advertisement.*, service_provider.service_name,service_provider.location,users.contact_no FROM advertisement INNER JOIN service_provider ON advertisement.user_id = service_provider.user_id INNER JOIN users ON advertisement.user_id = users.user_id ';
    const result = await query(sql);

    return result.rows;
});

export { getAllAds };  