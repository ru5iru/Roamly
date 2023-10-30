import express from "express";
import { addHistory } from "../controllers/historyController.js";

const router = express.Router();

router.get("/history", addHistory);

export default router;
