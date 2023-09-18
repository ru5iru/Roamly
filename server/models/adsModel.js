import { query } from "../config/db.js";
import asyncHandler from "express-async-handler";
import fs from "fs";
import multer from "multer";

// get all ads
const getAllAds = asyncHandler(async () => {
    const sql = "SELECT * FROM advertisement";
    const result = await query(sql);

    return result.rows;
});


// get ad by id
const getAd = async (adId) => {
    const sql = "SELECT * FROM advertisement WHERE ad_id = $1";
    const result = await query(sql, [adId]);
    return result;
  };
  

// save ad
const saveAd = asyncHandler(async (title, description, details, imageFile) => {
    const ad_id = Math.floor(Math.random() * 1000000000);
    const user_id = 2;
    const service_type = "hotel";

    // const imageFileName = `${ad_id}_${imageFile.originalname}`;
    // const imageFilePath = `uploads/${imageFileName}`; // Define the file path

    // Save the image file to the server
    // imageFile.mv(imageFilePath, (err) => {
    //     if (err) {
    //         throw new Error("Error saving image file");
    //     }
    // });

    const sql =
        "INSERT INTO advertisement (ad_id, user_id, service_type, title, description, details, ad_media) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const result = await query(sql, [
        ad_id, user_id, service_type, title, description, details, imageFile, // Insert the image file path into the database
    ]);

    return result;
});

// const saveAd = asyncHandler(async (title, description, details, ad_image) => {
//     // const ad_id = Math.floor(Math.random() * 100000);
//     //   const ad_id = 38742;
//     const ad_id = Math.floor(Math.random() * 1000000000);
//     const user_id = 2;
//     const service_type = "hotel";

//     const sql =
//         "INSERT INTO advertisement (ad_id, user_id, service_type, title, description, details, ad_image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
//     const result = await query(sql, [
//         ad_id,
//         user_id,
//         service_type,
//         title,
//         description,
//         details,
//         ad_image,
//     ]);

//     return result;
// });

// import { query } from "../config/db.js";
// import asyncHandler from "express-async-handler";

// const saveAd = asyncHandler(async (title, description, details, ad_image) => {
//   const ad_id = Math.floor(Math.random() * 1000000000);
//   const user_id = 2;
//   const service_type = "hotel";

//   const sql =
//     "INSERT INTO advertisement (ad_id, user_id, service_type, title, description, details, ad_image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";

//   const result = await query(sql, [
//     ad_id,
//     user_id,
//     service_type,
//     title,
//     description,
//     details,
//     ad_image.buffer, // Store the image as a bytea
//   ]);

//   return result;
// });


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

export { getAllAds, saveAd, deleteAd, getAllAdsFeed, getAd, updateAd };
