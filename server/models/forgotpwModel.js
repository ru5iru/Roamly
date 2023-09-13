import { query } from '../config/db.js';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';

const resetPassword = asyncHandler(async (email, password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const sql = 'UPDATE users SET password_hash = $1 WHERE email = $2';

    const updateResult = await query(sql, [
        hashedPassword,
        email,
    ]);

    if (updateResult.rowCount === 1) {
        return true;
    } else {
        return false;
    }
});

const storeToken = asyncHandler(async(email, token) => {
    const sql = 'INSERT INTO reset_tokens (email, token) VALUES ($1, $2)';

    const result = await query(sql, [email, token]);

    return result;
});

const getEmail = asyncHandler(async (token) => {
    const sql = 'SELECT email FROM reset_tokens WHERE token = $1';
    const result = await query(sql, [token]);

    if (result.rowCount === 1) {
        return result.rows[0].email;
    } else {
        return null; // Return null or handle the error as needed
    }
});



export {
    resetPassword,
    storeToken,
    getEmail,
};
// UPDATE users
// SET password = 'new_password_hash'  -- Replace 'new_password_hash' with the hashed new password
// WHERE email = 'user@example.com';  -- Replace 'user@example.com' with the user's email
