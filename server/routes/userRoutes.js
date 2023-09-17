import express from "express";
const router = express.Router();
import {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUserProfile,
    getUserProfile,
    updateUserProfile
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";
import { sendVerificationEmail, verifyEmail } from "../controllers/verificationController.js";


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile/:id", protect, getUserProfile);
router.get("/profile", protect, getCurrentUserProfile);
router.put("/profile", protect, updateUserProfile);
router.post("/sendVerificationEmail", sendVerificationEmail);
router.get("/verify/:token", verifyEmail);

export default router;
