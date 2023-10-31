import { query } from '../config/db.js';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

// find user is exists by email
const isUserExists = asyncHandler(async (email) => {
    const sql = 'SELECT * FROM users WHERE email = $1';
    const result = await query(sql, [email]);

    return result.rowCount > 0;
});

// find user is verified by email
const isUserVerified = asyncHandler(async (email) => {
    const sql = 'SELECT * FROM users WHERE isverified = true AND email = $1';
    const result = await query(sql, [email]);

    return result.rowCount > 0;
});

// find user is exists by user id
const isUserExistsByID = asyncHandler(async (id) => {
    const sql = 'SELECT * FROM users WHERE user_id = $1';
    const result = await query(sql, [id]);

    return result.rowCount > 0;
});

// find user by email
const findUserByEmail = asyncHandler(async (email) => {
    const sql = 'SELECT * FROM users WHERE email = $1';
    const result = await query(sql, [email]);

    return result.rows[0];
});

// find user by ID
const findUserByID = asyncHandler(async (id) => {
    const sql = 'SELECT user_id, firstname, lastname, email, contact_no, user_type, isverified, profile_pic, cover_pic FROM users WHERE user_id = $1';
    const result = await query(sql, [id]);

    return result.rows[0];
});

// authenticate user
const authUser = asyncHandler(async (email, password) => {
    const sql = 'SELECT * FROM users WHERE email = $1';
    const result = await query(sql, [email]);

    if (result.rowCount > 0) {
        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (isMatch) {
            return user;
        } else {
            return false;
        }
    } else {
        return false;
    }
});

// register user
const registerUsers = asyncHandler(async (firstname, lastname, email, password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    function generateRandomUserID() {
        return Math.floor(Math.random() * 90000) + 10000;
    }
    let randomUserID = generateRandomUserID();

    while (!isUserExistsByID(randomUserID)) {
        randomUserID = generateRandomUserID();
    }

    const sql = 'INSERT INTO users (firstname, lastname, user_id, email, password_hash) VALUES ($1, $2, $3, $4, $5) RETURNING firstname, lastname, user_id, email';
    const result = await query(sql, [firstname, lastname, randomUserID, email, hashedPassword]);

    return result;
});

export {
    isUserExists,
    registerUsers,
    authUser,
    findUserByEmail,
    findUserByID,
    isUserVerified,
};