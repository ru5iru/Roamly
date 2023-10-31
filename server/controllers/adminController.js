import asyncHandler from "express-async-handler";
import { getAdsRequested, getReportRequested, getPostRequested } from "../models/adminModel.js";
import { getUadminD } from "../models/adminModel.js";
import { getAdsSubmitted, getAdsPublished, getAdsReturned } from "../models/adminModel.js";

const getadRequested = asyncHandler(async (req, res) => {
    const adreq = await getAdsRequested();

    if (adreq) {
        res.status(200).json(adreq);
    } else {
        res.status(404);
        throw new Error("Ad requests not found");
    }
});

const getreportsRequested = asyncHandler(async (req, res) => {
    const rereq = await getReportRequested();

    if (rereq) {
        res.status(200).json(rereq);
    } else {
        res.status(404);
        throw new Error("Reports not found");
    }
});

const getpostsRequested = asyncHandler(async (req, res) => {
    const poreq = await getPostRequested();

    if (poreq) {
        res.status(200).json(poreq);
    } else {
        res.status(404);
        throw new Error("Posts not found");
    }
});

// Admins
const getUserAdminD = asyncHandler(async (req, res) => {
    const adata = await getUadminD();

    if (adata) {
        res.status(200).json(adata);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

const getAdS = asyncHandler(async (req, res) => {
    const adreq = await getAdsSubmitted();

    if (adreq) {
        res.status(200).json(adreq);
    } else {
        res.status(404);
        throw new Error("Submitted ads not found");
    }
});

const getAdP = asyncHandler(async (req, res) => {
    const adreq = await getAdsPublished();

    if (adreq) {
        res.status(200).json(adreq);
    } else {
        res.status(404);
        throw new Error("Published ads not found");
    }
});

const getAdR = asyncHandler(async (req, res) => {
    const adreq = await getAdsReturned();

    if (adreq) {
        res.status(200).json(adreq);
    } else {
        res.status(404);
        throw new Error("Returned ads not found");
    }
});

export {getadRequested, getreportsRequested, getpostsRequested, getUserAdminD, getAdS, getAdP, getAdR};