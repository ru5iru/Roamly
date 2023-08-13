import express from "express";

import { getAds, addAd } from "../controllers/adsController.js";

const router = express.Router();

router.get("/advertisements", getAds);
// router.get("/:id", getAds);
router.post("/advertisements", addAd);

export default router;
