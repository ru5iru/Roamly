import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import {
    isUserExists,
    registerUsers,
    authUser,
    findUserByID,
    isUserVerified,
} from "../models/userModel.js";

// desc    Login user
// route   POST /api/users/login
// access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const isVerified = await isUserVerified(email);

    if (!isVerified) {
        res.status(400).json("User is not registered.");
        // console.log("User is not registered.");

        // throw new Error("User is not registered.");
    }


    const user = await authUser(email, password);

    if (user) {
        generateToken(res, user.user_id);
        res.status(201).json({
            firstname: user.firstname,
            lastname: user.lastname,
            user_id: user.user_id,
            email: user.email,
            profile_pic: user.profile_pic,
            cover_pic: user.cover_pic,
        });
    } else {
        res.status(400).json("Invalid Email or Password");
        // throw new Error("Invalid email or password");
    }
});

// desc    Logout user
// route   POST /api/users/logout
// access  Private (users who only has token/login can access)
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    });

    res.status(200).json({ message: "User logged out" });
});

// desc    Register new user
// route   POST /api/users/register
// access  Public (because anyone can access without token)
const registerUser = asyncHandler(async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    const isExist = await isUserExists(email);

    if (isExist) {
        res.status(400);
        throw new Error("Email already used.");
    }

    const user = await registerUsers(firstname, lastname, email, password);

    if (user.rowCount > 0) {
        res.status(201).json({
            firstname: user.rows[0].firstname,
            lastname: user.rows[0].lastname,
            user_id: user.rows[0].user_id,
            email: user.rows[0].email,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// desc    Get user profile
// route   GET /api/users/profile
// access  Private
const getCurrentUserProfile = asyncHandler(async (req, res) => {

    const user = await findUserByID(req.user.user_id);

    if (user) {
        res.status(201).json({
            user_id: user.user_id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            contact_no: user.contact_no,
            user_type: user.user_type,
            isverified: user.isverified,
            profile_pic: user.profile_pic,
            cover_pic: user.cover_pic,
        });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

// desc    Get user profile
// route   GET /api/users/profile
// access  Private
const getUserProfile = asyncHandler(async (req, res) => {

    const user = await findUserByID(req.params.id);

    if (user) {
        res.status(201).json({
            user_id: user.user_id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            contact_no: user.contact_no,
            user_type: user.user_type,
            isverified: user.isverified,
            profile_pic: user.profile_pic,
            cover_pic: user.cover_pic,
        });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

// desc    Update user profile
// route   PUT /api/users/profile
// access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    console.log(req.user);

    res.status(200).json({ message: "Update user profile" });
});

export {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUserProfile,
    getUserProfile,
    updateUserProfile,
};
