import express from "express";

import { getAds } from "../controllers/ads.js";

const router = express.Router();

router.get("/", getAds);

export default router;
