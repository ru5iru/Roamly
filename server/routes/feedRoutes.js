import express from "express";

import { getFeed } from "../controllers/feedController.js";

const router = express.Router();

router.get("/", getFeed);

export default router;
