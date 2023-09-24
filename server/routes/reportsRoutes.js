import express from "express";
const router = express.Router();
import { getTodayPReports, getTodayUReports, getOngoingPReports, getOngoingUReports } from "../controllers/reportsController.js";
import { getUserReportsND, getPostReportsND, getUserReportsD, getPostReportsD } from "../controllers/reportsController.js";
import { getpostReportDetails, getPostDetails, getAllReports, getAllReportCount } from "../controllers/reportsController.js";
import { archivePost } from "../controllers/reportsController.js";

router.get("/todayP", getTodayPReports);
router.get("/todayU", getTodayUReports);
router.get("/ongoingP", getOngoingPReports);
router.get("/ongoingU", getOngoingUReports);

router.get("/userReportsND", getUserReportsND);
router.get("/postReportsND", getPostReportsND);
router.get("/userReportsD", getUserReportsD);
router.get("/postReportsD", getPostReportsD);

router.get("/postReportDetails", getpostReportDetails);
router.get("/postDetails", getPostDetails);
router.get("/allReports", getAllReports);
router.get("/allReportCount", getAllReportCount);

router.post("/archivePost", archivePost);
export default router;