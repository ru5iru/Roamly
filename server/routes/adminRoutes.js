import express from "express";
const router = express.Router();
import { getUserAdminD } from "../controllers/adminController.js";

router.get("/useradminD", getUserAdminD);

export default router;