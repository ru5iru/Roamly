import asyncHandler from "express-async-handler";
import { getAdsRequested, getReportRequested, getPostRequested } from "../models/adminModel.js";
import { getUadminD } from "../models/userModel.js";

const getadRequested = asyncHandler(async (req, res) => {
    const adreq = await getAdsRequested();

    if (adreq) {
        res.status(200).json(adreq);
    } else {
        res.status(404);
        throw new Error("Posts not found");
    }
});

const getreportsRequested = asyncHandler(async (req, res) => {
    const rereq = await getReportRequested();

    if (rereq) {
        res.status(200).json(rereq);
    } else {
        res.status(404);
        throw new Error("Posts not found");
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

export {getadRequested, getreportsRequested, getpostsRequested, getUserAdminD};