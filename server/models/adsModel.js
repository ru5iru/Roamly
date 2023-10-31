import { query } from "../config/db.js";
import asyncHandler from "express-async-handler";

// get all ads
const getAllAds = asyncHandler(async () => {
    const sql = "SELECT * FROM advertisement";
    const result = await query(sql);
    return result.rows;
});

const saveAd = asyncHandler(async (title, description, details) => {
    // const ad_id = Math.floor(Math.random() * 100000);
    //   const ad_id = 38742;
    const ad_id = Math.floor(Math.random() * 1000000000);
    const user_id = 2;
    const service_type = "hotel";

    const sql =
        "INSERT INTO advertisement (ad_id, user_id, service_type, title, description, details) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const result = await query(sql, [
        ad_id,
        user_id,
        service_type,
        title,
        description,
        details,
    ]);

    return result;
});

// delete post
const deleteAd = asyncHandler(async (post_id) => {
    const sql = "DELETE FROM advertisement WHERE ad_id = $1";
    const result = await query(sql, [ad_id]);

    return true;
});

const getAllAdsFeed = asyncHandler(async () => {
    const sql = 'SELECT advertisement.*, users.firstname,users.lastname,users.contact_no,users.email,service_provider.location FROM advertisement INNER JOIN users ON advertisement.user_id = users.user_id INNER JOIN users ON service_provider.user_id = users.user_id ';
    const result = await query(sql);

    return result.rows;
});

export { getAllAds, saveAd, deleteAd, getAllAdsFeed };
