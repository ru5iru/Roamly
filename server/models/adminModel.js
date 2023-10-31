import { query } from "../config/db.js";
import asyncHandler from "express-async-handler";

const getAdsRequested = asyncHandler(async () => {
    const sql = "SELECT COUNT(ad_id) FROM advertisement WHERE created_at = CURRENT_DATE;";
    const result = await query(sql);
    return result.rows;
});

const getReportRequested = asyncHandler(async () => {
    const sql = "SELECT COUNT(report_id) FROM report WHERE date = CURRENT_DATE AND reported_user_id IS NOT NULL;";
    const result = await query(sql);
    return result.rows;
});

const getPostRequested = asyncHandler(async () => {
    const sql = "SELECT COUNT(report_id) FROM report WHERE date = CURRENT_DATE AND reported_post_id IS NOT NULL;";
    const result = await query(sql);
    return result.rows;
});

// View Admins
const getUadminD = asyncHandler(async () => {
    const sql = 'SELECT * FROM users';
    const result = await query(sql);
    return result.rows;
});

const getAdsSubmitted = asyncHandler(async () => {
    const sql = "SELECT COUNT(ad_id) FROM advertisement WHERE status = 'submitted';";
    const result = await query(sql);
    return result.rows;
});

const getAdsPublished = asyncHandler(async () => {
    const sql = "SELECT COUNT(ad_id) FROM advertisement WHERE status = 'published';";
    const result = await query(sql);
    return result.rows;
});

const getAdsReturned = asyncHandler(async () => {
    const sql = "SELECT COUNT(ad_id) FROM advertisement WHERE status = 'returned';";
    const result = await query(sql);
    return result.rows;
});

export { getAdsRequested, getReportRequested, getPostRequested, getUadminD, getAdsSubmitted, getAdsPublished, getAdsReturned};