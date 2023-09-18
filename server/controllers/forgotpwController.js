import asyncHandler from "express-async-handler";
import {
    isUserExists,
} from "../models/userModel.js";
import {sendResetEmail} from "../utils/sendEmail.js" ;
import { resetPassword, storeToken, getEmail } from "../models/forgotpwModel.js";
import jwt, { decode } from 'jsonwebtoken';


// function generateResetToken() {
//     return Math.random().toString(36).substring(7);
// }

function generateResetToken(email) {
    const secretKey = 'yourSecretKey'; // Replace with your own secret key
    const token = jwt.sign({ email }, secretKey, { expiresIn: '5m' }); // You can adjust the expiration time as needed
    return token;
}

function getTokenFromUrl(url) {
    const parts = url.split('?');
    console.log(parts)

    if (parts.length > 1) {
        const queryParams = parts[1].split('&');

        for (const param of queryParams) {
            const [key, value] = param.split('=');

            if (key === 'token') {
                return value;
            }
        }
    }

    return null;
}

function isTokenExpired (token) {
    try {
        const decoded = jwt.verify(token, 'yourSecretKey');
        const currentTimestamp = Math.floor(Date.now() / 1000);

        return decoded.exp < currentTimestamp;
    } catch (error) {
        return true;
    }
}

const isEmailAvailable = asyncHandler(async (req, res) =>{
    const { email } = req.body;

    const available = await isUserExists(email);

    if(!available) {
        res.status(400).json("User not found");
    } else {
        const resetToken = generateResetToken(email);

        const resetLink = `http://localhost:3000/resetpw?token=${resetToken}&email=${email}`;

        try {
            await sendResetEmail(email, resetLink);
            await storeToken(email, resetToken);

            // toast.success("Reset link sent successfully, please check your email.");

            res.status(200).json({ message: "Reset link sent successfully", resetLink});

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to send reset link" });
        }
    }
});

const resetPasswordController = asyncHandler(async (req, res) => {
    const { resetLink, password} = req.body;

    const token = getTokenFromUrl(resetLink);

    if (!token) {
        return res.status(400).json({ message: "Invalid token" });
    }

    const expired = isTokenExpired(token);

    if (expired) {
        return res.status(400).json({ message: "Token has expired" });
    }

    const userEmail = await getEmail(token);

    const passwordResetSuccess = await resetPassword(userEmail, password);

    if (passwordResetSuccess) {
        res.status(200).json({ message: "Password reset successful" });
    } else {
        res.status(500).json({ message: "Failed to reset password" });
    }
});



export {
    isEmailAvailable,
    resetPasswordController,
    getTokenFromUrl,
};