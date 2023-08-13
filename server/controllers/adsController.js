// import pool from "../connect.js";
import { getAllAds, saveAd } from "../models/adsModel.js"
import asyncHandler from "express-async-handler";

const getAds = asyncHandler(async (req, res) => {
    const ads = await getAllAds();

    if (ads.length > 0) {
        res.status(200).json(ads);
    } else {
        res.status(404);
        throw new Error("Ads not found");
    }
});

// const getUserAds = asyncHandler(async (req, res) => {
//     const ads = await getAllAds();

//     if (ads.length > 0) {
//         res.status(200).json(ads);
//     } else {
//         res.status(404);
//         throw new Error("Ads not found");
//     }
// });

const addAd = asyncHandler(async (req, res) => {
    const { service_type, title, description, details } = req.body;
  
    const ad = await saveAd(service_type, title, description, details);
  
    if (ad.rows.length > 0) {
        res.status(201).json(rows[0]);
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
  });


// const addAd = asyncHandler(async (req, res) => {
//     const { service_type, title, description, details } = req.body;

//     const ad = await saveAd(service_type, title, description, details);

//     if (ad.rows.length > 0) {
//         res.status(201).json({
//             ad_id: post.rows[0].ad_id,
//             user_id: post.rows[0].user_id,
//          });
//     } else {
//         res.status(400);
//         throw new Error("Invalid user data");
//     }
// });


// const getAds = async (req, res) => {
//     // console.log("getAds???????");
//     try {
//         const allAds = await pool.query("SELECT \"advertisement\".*, \"service_provider\".service_name,\"service_provider\".location , \"users\".contact_no FROM advertisement INNER JOIN \"service_provider\" ON advertisement.user_id = \"service_provider\".user_id INNER JOIN \"users\" ON \"service_provider\".user_id = \"users\".user_id;");
//         res.json(allAds.rows);
//         // console.log(allAds.rows);

//     }
//     catch (err) {
//         console.error(err.message)
//     }
// };

export { getAds, addAd };