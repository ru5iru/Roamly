import express from "express";
const router = express.Router();
import { serviceRatings, addReview, removePost, getAvgRating } from "../controllers/ratingController.js"
import { protect, permit } from "../middleware/authMiddleware.js";

router.get("/", serviceRatings);
router.get("/avg", getAvgRating);
router.post("/", addReview);
router.delete("/", removePost);

export default router;

