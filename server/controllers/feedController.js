// import pool from "../connect.js";
import asyncHandler from "express-async-handler";
import {
    getAllFeed
} from "../models/feedModel.js"


const getFeed = asyncHandler(async (req, res) => {
    const ads = await getAllFeed();

    if (ads.length > 0) {
        res.status(200).json(ads);
    } else {
        res.status(404);
        throw new Error("Ads not found");
    }
});

export { getFeed };