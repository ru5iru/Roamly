import { query } from "../config/db.js";
import asyncHandler from "express-async-handler";

const getTodaypReports = asyncHandler(async () => {
    const sql = "SELECT COUNT(Report_id) FROM report WHERE date = CURRENT_DATE AND reported_post_id IS NOT NULL;";
    const result = await query(sql);
    return result.rows;
});

const getTodayuReports = asyncHandler(async () => {
    const sql = "SELECT COUNT(Report_id) FROM report WHERE date = CURRENT_DATE AND reported_user_id IS NOT NULL;";
    const result = await query(sql);
    return result.rows;
});

const getOngoingpReports = asyncHandler(async () => {
    const sql = "SELECT COUNT(Report_id) FROM report WHERE reported_post_id IS NOT NULL AND report_status='ongoing';";
    const result = await query(sql);
    return result.rows;
});

const getOngoinguReports = asyncHandler(async () => {
    const sql = "SELECT COUNT(Report_id) FROM report WHERE reported_user_id IS NOT NULL AND report_status='ongoing';";
    const result = await query(sql);
    return result.rows;
});

const getuReportsND = asyncHandler(async () => {
    const sql = "SELECT CONCAT (users.firstname, ' ', users.lastname) AS poster_name, report_types.type, report_types.severity, report.content, report.report_status, report.reported_user_id  FROM report INNER JOIN users ON users.user_id = report.reported_user_id INNER JOIN report_types ON report.report_type_id = report_types.report_type_id WHERE report.reported_user_id IS NOT NULL AND report.report_status !='done';";
    const result = await query(sql);
    return result.rows;
});

const getpReportsND = asyncHandler(async () => {
    const sql = "SELECT CONCAT(users.firstname, ' ', users.lastname) AS poster_name, report_types.type, report_types.severity, report.content, report.remedy, report.reported_post_id, report.report_id FROM report INNER JOIN post ON report.reported_post_id = post.post_id INNER JOIN users ON users.user_id = post.user_id INNER JOIN report_types ON report.report_type_id = report_types.report_type_id WHERE report.reported_post_id IS NOT NULL AND report.report_status != 'done'; ";
    const result = await query(sql);
    return result.rows;
});

const getuReportsD = asyncHandler(async () => {
    const sql = "SELECT CONCAT (users.firstname, ' ', users.lastname) AS poster_name, report_types.type, report_types.severity, report.content, report.report_status, report.reported_user_id, report.remedy  FROM report INNER JOIN users ON users.user_id = report.reported_user_id INNER JOIN report_types ON report.report_type_id = report_types.report_type_id WHERE report.reported_user_id IS NOT NULL AND report.report_status ='done';";
    const result = await query(sql);
    return result.rows;
});

const getpReportsD = asyncHandler(async () => {
    const sql = "SELECT CONCAT(users.firstname, ' ', users.lastname) AS poster_name, report_types.type, report_types.severity, report.content, report.remedy, report.reported_post_id FROM report INNER JOIN post ON report.reported_post_id = post.post_id INNER JOIN users ON users.user_id = post.user_id INNER JOIN report_types ON report.report_type_id = report_types.report_type_id WHERE report.reported_post_id IS NOT NULL AND report.report_status = 'done'; ";
    const result = await query(sql);
    return result.rows;
});

const getpReportDetails = asyncHandler(async (selectedPost) => {
    const sql = "SELECT report.*, post.*, users.* FROM report INNER JOIN post ON report.reported_post_id = post.post_id INNER JOIN users ON post.user_id = users.user_id WHERE report.report_id = $1";
    const result = await query(sql, [selectedPost]);
    return result.rows;
});

const getpDetails = asyncHandler(async (selectedPostID) => {
    const sql = "SELECT COUNT(likes.*) AS like_count, COUNT(comment.*) AS comment_count FROM post INNER JOIN likes ON post.post_id = likes.post_id INNER JOIN comment ON post.post_id = comment.post_id WHERE post.post_id = $1";
    const result = await query(sql, [selectedPostID]);
    return result.rows;
});

const getallprDetails = asyncHandler(async (selectedPostID) => {
    const sql = "SELECT report.*,report_types.* FROM report INNER JOIN report_types ON report.report_type_id = report_types.report_type_id  WHERE reported_post_id = $1";
    const result = await query(sql, [selectedPostID]);
    return result.rows;
});

const getallprCount = asyncHandler(async (selectedPostID) => {
    const sql = "SELECT COUNT(report.*) AS report_count FROM report WHERE reported_post_id = $1";
    const result = await query(sql, [selectedPostID]);
    return result.rows;
});

const updatearchivePost = asyncHandler(async (postID) => {
    console.log("Shall Archive post with ID:", postID);
    const sql = "UPDATE post SET archived = true WHERE post_id = $1";
    const result = await query(sql, [postID]);
    return true;
});

export { getTodaypReports, getTodayuReports, getOngoingpReports, getOngoinguReports, getuReportsND, getpReportsND, getuReportsD, getpReportsD, getpReportDetails, getpDetails, getallprDetails, getallprCount, updatearchivePost };