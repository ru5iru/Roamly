import express from "express";

import { getAds, addAd, removeAds, getAdsFeed, getAdById, updateAdvertisement, userAds } from "../controllers/adsController.js";

const router = express.Router();

router.get("/advertisements", getAds);
router.get("/advertisements/:id", getAdById);
router.get("/feed", getAdsFeed);
router.get("/useradvertisements", userAds);
router.post("/addadvertisements", addAd);
router.put("/advertisements/:id", updateAdvertisement);
router.delete("/advertisements", removeAds);

export default router;