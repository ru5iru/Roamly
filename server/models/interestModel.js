import { query } from "../config/db.js";
import asyncHandler from "express-async-handler";

// get all interests
const getAllInterests = asyncHandler(async () => {
   const sql = "SELECT * FROM interest_details";
   const result = await query(sql);

   return result.rows;
});

// get all interests by user
const getUserInterests = asyncHandler(async (id) => {
   const sql = "SELECT id.*, i.user_id FROM interest_details id INNER JOIN interests i ON id.interest_id = i.interest_id AND i.user_id = $1";

   const result = await query(sql, [id]);

   return result.rows;
});

// mark interests
const markInterests = asyncHandler(async (id, content) => {
   const sql1 = "INSERT INTO interests (interest_id, user_id) VALUES ($1, $2) RETURNING interest_id, user_id";
   const sql2 = "DELETE FROM interests WHERE interest_id = $1 AND user_id = $2";
   const sql3 = "SELECT * FROM interests WHERE interest_id = $1 AND user_id = $2";

   for (const key in content) {
      if (content[key] === true) {
         const result = await query(sql3, [key, id]);
         if (result.rows[0]) {
            continue;
         } else {
            const result2 = await query(sql1, [key, id]);
         }
      } else {
         const result = await query(sql3, [key, id]);
         if (result.rows[0]) {
            const result2 = await query(sql2, [key, id]);
         } else {
            continue;
         }
      }
   }

   return true;
});

export { getAllInterests, getUserInterests, markInterests };
