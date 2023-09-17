import express from "express";

import { getAds, addAd, removeAds, getAdsFeed } from "../controllers/adsController.js";

const router = express.Router();

router.get("/advertisements", getAds);
router.get("/feed", getAdsFeed);
router.post("/advertisements", addAd);
router.delete("/advertisements", removeAds);

export default router;
