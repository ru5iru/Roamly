import express from "express";
const router = express.Router();
import { getBadge, allBadges, badgesByUser, lastFive } from "../controllers/badgeController.js";
import protect from "../middleware/authMiddleware.js";

router.get("/lastfive", protect, lastFive);
router.get("/:id", getBadge);
router.get("/", protect, badgesByUser);


export default router;