import express from "express";
const router = express.Router();
import { serviceRatings, addReview, removePost } from "../controllers/ratingController.js"
import { protect, permit } from "../middleware/authMiddleware.js";

router.get("/", serviceRatings);
router.post("/", addReview);
router.delete("/", removePost);

export default router;

