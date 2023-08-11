import express from "express";
const router = express.Router();
import { likesByID, addLike, removeLike } from "../controllers/likeController.js"
import protect from "../middleware/authMiddleware.js";

router.get("/", likesByID);
router.post("/", addLike);
router.delete("/", removeLike)

export default router;