import AsyncHandler from "express-async-handler";
import { getUadminD } from "../models/adminModel.js";

const getUserAdminD = AsyncHandler(async (req, res) => {
    const adata = await getUadminD();

    if (adata) {
        res.status(200).json(adata);
    } else {
        res.status(404);
        throw new Error("Users not found");
    }
});

export { getUserAdminD };