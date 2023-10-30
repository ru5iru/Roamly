import { query } from "../config/db.js";
import asyncHandler from "express-async-handler";

const getUadminD = asyncHandler(async () => {
    const sql = 'SELECT user_id, firstname, lastname, contact_no, user_type FROM users WHERE user_type = "Admin"';
    const result = await query(sql);
    return result.rows;
});

export { getUadminD };