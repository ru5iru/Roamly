import express from "express";
const router = express.Router();
import { allInterets, interestsByUser, addInterets } from "../controllers/interestController.js";

router.get("/all", allInterets);
// router.get("/:id", getBadge);
router.get("/", interestsByUser);
router.post("/", addInterets);


export default router;