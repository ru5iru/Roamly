import { query } from "../config/db.js";
import asyncHandler from "express-async-handler";
import fs from "fs";
import multer from "multer";

// get all ads
const getAllAds = asyncHandler(async () => {
    const sql = "SELECT * FROM advertisement";
    // const sql = "SELECT * FROM advertisement WHERE status = 'paid'";
    const result = await query(sql);

    return result.rows;
});


// get ad by id
const getAd = async (adId) => {
    const sql = "SELECT * FROM advertisement WHERE ad_id = $1";
    const result = await query(sql, [adId]);
    return result;
  };

  // get ad by user_id
  const getUserAd = asyncHandler(async (id) => {
    console.log(id);
    const sql = 'SELECT * FROM advertisement WHERE user_id = $1 ORDER BY created_at DESC';
    
    const result = await query(sql, [id]);

    return result.rows;
});
  

// save ad
const saveAd = asyncHandler(async (user_id, title, description, details, img) => {
    const image = img;
    const ad_id = Math.floor(Math.random() * 1000000000);
    const service_type = "hotel";

    const sql =
        "INSERT INTO advertisement (ad_id, user_id, service_type, title, description, details, ad_media) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const result = await query(sql, [
        ad_id, user_id, service_type, title, description, details, image, // Insert the image file path into the database
    ]);

    return result;
});


// update ad
const updateAd = asyncHandler(async (adId, title, description, details) => {
    const sql = `
      UPDATE advertisement
      SET title = $1, description = $2, details = $3
      WHERE ad_id = $4
      RETURNING *
    `;
    const result = await query(sql, [adId, title, description, details]);
  
    return result.rows[0]; // Return the updated advertisement data
  });

// delete ad
const deleteAd = asyncHandler(async (post_id) => {
    const sql = "DELETE FROM advertisement WHERE ad_id = $1";
    const result = await query(sql, [ad_id]);

    return true;
});

const getAllAdsFeed = asyncHandler(async () => {
    const sql = 'SELECT advertisement.*, service_provider.service_name,service_provider.location,users.contact_no FROM advertisement INNER JOIN service_provider ON advertisement.user_id = service_provider.user_id INNER JOIN users ON advertisement.user_id = users.user_id ';
    const result = await query(sql);

    return result.rows;
});

export { getAllAds, saveAd, deleteAd, getAllAdsFeed, getAd, updateAd, getUserAd };