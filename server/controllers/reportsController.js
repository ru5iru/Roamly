import AsyncHandler from "express-async-handler";
import { getTodaypReports, getTodayuReports, getOngoingpReports, getOngoinguReports } from "../models/reportsModel.js";
import { getuReportsND, getpReportsND, getuReportsD, getpReportsD } from "../models/reportsModel.js";
import { getpReportDetails, getpDetails, getallprDetails } from "../models/reportsModel.js";

const getTodayPReports = AsyncHandler(async (req, res) => {
    const preports = await getTodaypReports();

    if (preports) {
        res.status(200).json(preports);
    } else {
        res.status(404);
        throw new Error("Posts not found");
    }
});

const getTodayUReports = AsyncHandler(async (req, res) => {
    const ureports = await getTodayuReports();

    if (ureports) {
        res.status(200).json(ureports);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

const getOngoingPReports = AsyncHandler(async (req, res) => {
    const preports = await getOngoingpReports();

    if (preports) {
        res.status(200).json(preports);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

const getOngoingUReports = AsyncHandler(async (req, res) => {
    const ureports = await getOngoinguReports();

    if (ureports) {
        res.status(200).json(ureports);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

const getUserReportsND = AsyncHandler(async (req, res) => {
    const ureports = await getuReportsND();

    if (ureports) {
        res.status(200).json(ureports);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

const getPostReportsND = AsyncHandler(async (req, res) => {
    const preports = await getpReportsND();

    if (preports) {
        res.status(200).json(preports);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

const getUserReportsD = AsyncHandler(async (req, res) => {
    const ureports = await getuReportsD();

    if (ureports) {
        res.status(200).json(ureports);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

const getPostReportsD = AsyncHandler(async (req, res) => {
    const preports = await getpReportsD();

    if (preports) {
        res.status(200).json(preports);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

const getpostReportDetails = AsyncHandler(async (req, res) => {
    const preport = await getpReportDetails(req.query.selectedPost);

    if (preport) {
        res.status(200).json(preport);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

const getPostDetails = AsyncHandler(async (req, res) => {
    const preport = await getpDetails(req.query.selectedPostID);

    if (preport) {
        res.status(200).json(preport);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

const getAllReports = AsyncHandler(async (req, res) => {
    const preport = await getallprDetails(req.query.selectedPostID);

    if (preport) {
        res.status(200).json(preport);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});
export { getTodayPReports, getTodayUReports, getOngoingPReports, getOngoingUReports, getUserReportsND, getPostReportsND, getUserReportsD, getPostReportsD, getpostReportDetails, getPostDetails, getAllReports };