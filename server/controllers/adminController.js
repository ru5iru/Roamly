import AsyncHandler from "express-async-handler";
import { getAdminDetails } from "../models/adminModel.js";

const getadminData = AsyncHandler(async (req, res) => {
    const preports = await getAdminDetails();

    if (preports) {
        res.status(200).json(preports);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

export { getadminData };