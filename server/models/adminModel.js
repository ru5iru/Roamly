import { query } from "../config/db.js";
import asyncHandler from "express-async-handler";

const getAdminDetails = asyncHandler(async () => {
    const sql = "SELECT (firstname && lastname, contact_no, user_type) FROM user WHERE user_type = 'Admin'; ";
    const result = await query(sql);
    return result.rows;
});

export { getAdminDetails };