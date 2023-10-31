import express from "express";
const router = express.Router();
import { getBadge, allBadges, badgesByUser, lastFive, changeBadge } from "../controllers/badgeController.js";
import { protect, permit } from "../middleware/authMiddleware.js";

router.get("/lastfive", protect, lastFive);
router.get("/:id", getBadge);
router.get("/", protect, badgesByUser);
router.post("/", changeBadge);


export default router;