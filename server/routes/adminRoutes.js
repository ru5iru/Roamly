import express from "express";
const router = express.Router();
import { getadRequested, getreportsRequested, getpostsRequested } from "../controllers/adminController.js";
import { getUserAdminD } from "../controllers/adminController.js";
import { getAdS, getAdP, getAdR } from "../controllers/adminController.js";

router.get("/submitAds", getadRequested);
router.get("/reportsToday", getreportsRequested);
router.get("/postsToday", getpostsRequested);

router.get("/useradminD", getUserAdminD);

router.get("/adsS", getAdS);
router.get("/adsP", getAdP);
router.get("/adsR", getAdR);

export default router;