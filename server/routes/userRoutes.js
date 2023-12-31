import express from "express";
const router = express.Router();
import {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUserProfile,
    getUserProfile,
    updateProfilePic,
    updateCoverPic,
    registerService
} from "../controllers/userController.js";
import { protect, permit } from "../middleware/authMiddleware.js";
import { sendVerificationEmail, verifyEmail } from "../controllers/verificationController.js";
import { getTokenFromUrl, isEmailAvailable, resetPasswordController } from "../controllers/forgotpwController.js";


router.post("/register", registerUser);
router.post("/registersp", registerService);
router.post("/login", loginUser);
router.put("/propic", updateProfilePic);
router.put("/coverpic", updateCoverPic);
router.post("/logout", logoutUser);
router.get("/profile/:id", protect, getUserProfile);
router.get("/profile", protect, getCurrentUserProfile);
router.post("/sendVerificationEmail", sendVerificationEmail);
router.get("/verify/:token", verifyEmail);
router.post("/emailavailable", isEmailAvailable);
router.post("/resetpw", resetPasswordController);
router.post("/getToken", getTokenFromUrl);

export default router;
