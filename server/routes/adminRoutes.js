import express from "express";
const router = express.Router();
import { getadminData } from "../controllers/adminController.js";

router.get("/postAdminData", getadminData);

export default router;