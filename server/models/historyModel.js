import { query } from "../config/db.js";
import asyncHandler from "express-async-handler";

const saveHistory = asyncHandler(async (name) => {
    const history_id = Math.floor(Math.random() * 1000000000);

    const sql =
        "INSERT INTO history (history_id, name) VALUES ($1, $2) RETURNING *";
    const result = await query(sql, [
        history_id, name // Insert the image file path into the database
    ]);

    return result;
});

export { saveHistory};
