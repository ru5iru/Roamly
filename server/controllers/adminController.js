import asyncHandler from "express-async-handler";
import { getAdsRequested, getReportRequested, getPostRequested } from "../models/adminModel.js";
import { getUadminD } from "../models/adminModel.js";
import { getAdsSubmitted, getAdsPublished, getAdsReturned } from "../models/adminModel.js";
import { getAdvD } from "../models/adminModel.js";
import { getAdvFD } from "../models/adminModel.js";
import { getTD } from "../models/adminModel.js";
import { getGD } from "../models/adminModel.js";
import { getTaxD } from "../models/adminModel.js";
import { getHD } from "../models/adminModel.js";
import { getOtherSD } from "../models/adminModel.js";

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

//Travellers
const getTraD = asyncHandler(async (req, res) => {
    const adata = await getTD();

    if (adata) {
        res.status(200).json(adata);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

//Guides
const getGuiD = asyncHandler(async (req, res) => {
    const adata = await getGD();

    if (adata) {
        res.status(200).json(adata);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

//Taxis
const getTaxiD = asyncHandler(async (req, res) => {
    const adata = await getTaxD();

    if (adata) {
        res.status(200).json(adata);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

//Hotels
const getHotelD = asyncHandler(async (req, res) => {
    const adata = await getHD();

    if (adata) {
        res.status(200).json(adata);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

//Other Services
const getOsD = asyncHandler(async (req, res) => {
    const adata = await getOtherSD();

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

const getAdvDisplay = asyncHandler(async (req, res) => {
    const adreq = await getAdvD();

    if (adreq) {
        res.status(200).json(adreq);
    } else {
        res.status(404);
        throw new Error("Ads not found");
    }
});

const getAdvFDisplay = asyncHandler(async (req, res) => {
    const adreq = await getAdvFD();

    if (adreq) {
        res.status(200).json(adreq);
    } else {
        res.status(404);
        throw new Error("Ads not found");
    }
});

//Add Admin
const addAdmin = asyncHandler(async (req, res) => {
    const { firstname, lastname, email, contact_no, gender, username, password } = req.body;

    const ad = await saveAdmin(firstname, lastname, email, contact_no, gender, username, password);

    if (ad.rows.length > 0) {
        res.status(201).json(rows[0]);
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

export {getadRequested, getreportsRequested, getpostsRequested, getUserAdminD, getAdS, getAdP, getAdR, getAdvDisplay, getAdvFDisplay, getTraD, getGuiD, getTaxiD, getHotelD, getOsD, addAdmin};