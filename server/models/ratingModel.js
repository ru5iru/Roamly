import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler';

// get ratings by service
const getServiceRatings = asyncHandler(async (id) => {
   const sql = 'SELECT * FROM ratings WHERE service_id = $1 ORDER BY created_at DESC';
   const result = await query(sql, [id]);

   return result.rows;
})

// find review is exists by review id
const isReviewExistsByID = asyncHandler(async (id) => {
   const sql = 'SELECT * FROM ratings WHERE rating_id = $1';
   const result = await query(sql, [id]);

   return result.rowCount > 0;
});

// add review
const saveReview = asyncHandler(async (service_id, user_id, rating, comment) => {

   function generateRandomPostID( user_id ){
       let randomID = Math.floor(Math.random() * 90000) + 10000;
       return parseInt(user_id.toString() + randomID.toString())
   }

   let randomPostID = generateRandomPostID(user_id);

   while(!isReviewExistsByID(randomPostID)){
       randomPostID = generateRandomPostID(user_id);
   }

   const sql = 'INSERT INTO ratings (service_id, user_id, rating, comment, rating_id) VALUES ($1, $2, $3, $4, $5) RETURNING rating_id, user_id, service_id';
   const result = await query(sql, [service_id, user_id, rating, comment, randomPostID]);

   return result;
});

// delete review
const deleteReview = asyncHandler(async (rating_id) => {
   const sql = 'DELETE FROM ratings WHERE rating_id = $1';
   const result = await query(sql, [rating_id]);

   return true;
});

// delete review
const getRatingAvg = asyncHandler(async (service_id) => {
   const sql = 'SELECT CAST(AVG(rating) AS DECIMAL(10,2)), COUNT(user_id) FROM ratings WHERE service_id = $1';
   const result = await query(sql, [service_id]);

   return result.rows[0];
});

export {getServiceRatings, saveReview, deleteReview, getRatingAvg}