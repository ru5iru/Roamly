// // // notificationModel.js

// // import { query } from '../config/db.js';
// // import asyncHandler from 'express-async-handler';

// // const getPostOwner = async (postId) => {
// //   const sql = 'SELECT user_id FROM posts WHERE post_id = $1';
// //   const result = await query(sql, [postId]);
// //   if (result.rows.length > 0) {
// //     return result.rows[0].user_id;
// //   }
// //   return null; // Handle the absence of a post owner as per your application's logic
// // };

// // const createNotification = async (user_id, notification_message) => {
// //   const sql = 'INSERT INTO notifications (user_id, notification_message) VALUES ($1, $2) RETURNING *';
// //   const result = await query(sql, [user_id, notification_message]);
// //   return result.rows[0];
// // };

// // export { getPostOwner, createNotification };


// // notificationModel.js
// import { query } from '../config/db.js'
// import asyncHandler from 'express-async-handler';


// const insertNotification = asyncHandler(async ( user_id,post_id) => {
//     const sql = 'INSERT INTO notifications (user_id, post_id) VALUES ($1, $2)';
//     const result = await query(sql, [user_id, post_id]);
//     // console.log("hello notification");
//     // try {
//     //   const result = await query(sql, values);
//     //   console.log("Notification inserted successfully:", result);
//     // } catch (error) {
//     //   console.error('Error while inserting into notifications table', error);
//     // }
//     return result;
//   });

//   export {insertNotification}
