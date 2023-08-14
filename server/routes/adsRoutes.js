import express from "express";

import { getAds, addAd, removeAds } from "../controllers/adsController.js";

const router = express.Router();

router.get("/advertisements", getAds);
// router.get("/:id", getAds);
router.post("/advertisements", addAd);
router.delete("/advertisements", removeAds);

export default router;
