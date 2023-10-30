// import pool from "../connect.js";
import asyncHandler from "express-async-handler";
import { saveHistory } from "../models/historyModel.js";

const addHistory = asyncHandler(async (req, res) => {
    const { name } = req.body;
 
    const history = await saveHistory(name);
 
    if (post.rowCount > 0) {
       // do we have to generate token here?
       res.status(201).json({
          name: history.rows[0].name
       });
    } else {
       res.status(400);
       throw new Error("Error");
    }
 });

  export { addHistory };