import express from "express";
const router = express.Router();
import { followersByID, followUser, unfollowUser } from "../controllers/relationshipController.js"
import { protect, permit } from "../middleware/authMiddleware.js";

router.get("/", followersByID);
router.post("/", followUser);
router.delete("/", unfollowUser)

export default router;