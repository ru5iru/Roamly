import express from "express";
const router = express.Router();
import { serviceRatings } from "../controllers/ratingController.js"
import { protect, permit } from "../middleware/authMiddleware.js";

router.get("/", serviceRatings);

export default router;

