// import pool from "../connect.js";
import { getAllAds, saveAd, deleteAd, getAllAdsFeed } from "../models/adsModel.js"
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

const addAd = asyncHandler(async (req, res) => {
    const { title, description, details } = req.body;

    const ad = await saveAd(title, description, details);

    if (ad.rows.length > 0) {
        res.status(201).json(rows[0]);
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

const removeAds = asyncHandler(async (req, res) => {
    const { ad_id } = req.query;

    const like = await deleteAd(ad_id);

    if (like) {
        res.status(201).json({
            status: "succes",
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

const getAdsFeed = asyncHandler(async (req, res) => {
    const ads = await getAllAdsFeed();

    if (ads.length > 0) {
        res.status(200).json(ads);
    } else {
        res.status(404);
        throw new Error("Ads not found");
    }
});

export { getAds, addAd, removeAds, getAdsFeed };