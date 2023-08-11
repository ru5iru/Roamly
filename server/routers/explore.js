import express from "express";

import { searchText } from "../controllers/explore.js";

const router = express.Router();

router.get("/:query", searchText);

export default router;
