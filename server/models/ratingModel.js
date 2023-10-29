import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler';

// get ratings by service
const getServiceRatings = asyncHandler(async (id) => {
   const sql = 'SELECT * FROM ratings WHERE service_id = $1';
   const result = await query(sql, [id]);

   return result.rows;
})

export {getServiceRatings}