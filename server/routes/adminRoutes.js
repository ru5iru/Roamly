import express from "express";
const router = express.Router();
import { getadRequested, getreportsRequested, getpostsRequested } from "../controllers/adminController.js";
import { getUserAdminD } from "../controllers/adminController.js";

router.get("/submitAds", getadRequested);
router.get("/reportsToday", getreportsRequested);
router.get("/postsToday", getpostsRequested);

router.get("/useradminD", getUserAdminD);

export default router;