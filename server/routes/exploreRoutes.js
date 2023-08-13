import express from "express";

import { searchAllPosts } from "../controllers/exploreController.js";

const router = express.Router();

router.get("/", searchAllPosts);

export default router;
