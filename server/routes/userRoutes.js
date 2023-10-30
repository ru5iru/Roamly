import express from "express";
const router = express.Router();
import {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUserProfile,
    getUserProfile,
    updateProfilePic,
    updateCoverPic
} from "../controllers/userController.js";
import { protect, permit } from "../middleware/authMiddleware.js";
import { sendVerificationEmail, verifyEmail } from "../controllers/verificationController.js";


router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/propic", updateProfilePic);
router.put("/coverpic", updateCoverPic);
router.post("/logout", logoutUser);
router.get("/profile/:id", protect, getUserProfile);
router.get("/profile", protect, getCurrentUserProfile);
router.post("/sendVerificationEmail", sendVerificationEmail);
router.get("/verify/:token", verifyEmail);

export default router;
