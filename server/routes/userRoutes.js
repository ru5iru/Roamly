import express from "express";
const router = express.Router();
import {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUserProfile,
    getUserProfile,
    updateUserProfile,
    registerService
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";
import { sendVerificationEmail, verifyEmail } from "../controllers/verificationController.js";
import { getTokenFromUrl, isEmailAvailable, resetPasswordController } from "../controllers/forgotpwController.js";


router.post("/register", registerUser);
router.post("/registersp", registerService);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", protect, getCurrentUserProfile);
router.put("/profile", protect, updateUserProfile);
router.post("/sendVerificationEmail", sendVerificationEmail);
router.get("/profile/:id", protect, getUserProfile);
router.get("/verify/:token", verifyEmail);
router.post("/emailavailable", isEmailAvailable);
router.post("/resetpw", resetPasswordController);
router.post("/getToken", getTokenFromUrl);

export default router;