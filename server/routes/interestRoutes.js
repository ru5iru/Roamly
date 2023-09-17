import express from "express";
const router = express.Router();
import { allInterets, interestsByUser } from "../controllers/interestController.js";

router.get("/all", allInterets);
// router.get("/:id", getBadge);
router.get("/", interestsByUser);


export default router;