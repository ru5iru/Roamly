import express from "express";

import { getAds } from "../controllers/adsController.js";

const router = express.Router();

router.get("/", getAds);

export default router;
