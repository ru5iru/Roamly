import express from "express";
const router = express.Router();
import { getadRequested, getreportsRequested, getpostsRequested } from "../controllers/adminController.js";
import { getUserAdminD } from "../controllers/adminController.js";
import { getAdS, getAdP, getAdR } from "../controllers/adminController.js";
import { getAdvDisplay } from "../controllers/adminController.js";
import { getAdvFDisplay } from "../controllers/adminController.js";
import { getTraD } from "../controllers/adminController.js";
import { getGuiD } from "../controllers/adminController.js";
import { getTaxiD } from "../controllers/adminController.js";
import { getHotelD } from "../controllers/adminController.js";
import { getOsD } from "../controllers/adminController.js";
import { addAdmin } from "../controllers/adminController.js";

router.get("/submitAds", getadRequested);
router.get("/reportsToday", getreportsRequested);
router.get("/postsToday", getpostsRequested);

router.get("/useradminD", getUserAdminD);

router.get("/adsS", getAdS);
router.get("/adsP", getAdP);
router.get("/adsR", getAdR);

router.get("/adDisplay", getAdvDisplay);

router.get("/fullAddDisplay", getAdvFDisplay);

router.get("/travD", getTraD);
router.get("/guideD", getGuiD);
router.get("/taxisD", getTaxiD);
router.get("/hotelsD", getHotelD);
router.get("/OsData", getOsD);

router.post("/admins", addAdmin);

export default router;