import express from "express";
const router = express.Router();
import { postByID, allPosts, userPosts, addPost, removePost, searchAllPosts } from "../controllers/postController.js"
import protect from "../middleware/authMiddleware.js";

router.get("/all", allPosts);
router.get("/:id", postByID);
router.get("/", userPosts);
router.post("/", addPost);
router.delete("/", removePost);

export default router;