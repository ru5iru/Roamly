import express from "express";

import { searchAllPosts, searchAllUsers, searchAllPhotos } from "../controllers/exploreController.js";

const router = express.Router();

router.get("/", searchAllPosts);
router.get("/users", searchAllUsers);
router.get("/photos", searchAllPhotos);


export default router;
