import express from "express";

import { getAds, addAd, removeAds, getAdsFeed, getAdvertisementsD } from "../controllers/adsController.js";

const router = express.Router();

router.get("/advertisements", getAds);
router.get("/feed", getAdsFeed);
router.post("/advertisements", addAd);
router.delete("/advertisements", removeAds);

router.get("/advertisementsD", getAdvertisementsD);

export default router;
