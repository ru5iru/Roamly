import asyncHandler from "express-async-handler";
import { getAllInterests, getUserInterests } from "../models/interestModel.js"

// desc
// route
// access

const allInterets = asyncHandler(async (req, res) => {
    const interests = await getAllInterests();
 
    if (interests.length > 0) {
       res.status(200).json(interests);
    } else {
       res.status(404);
       throw new Error("Interests not found");
    }
 });

// desc
// route
// access

const interestsByUser = asyncHandler(async (req, res) => {
    const interests = await getUserInterests(req.query.userId);
 
    if (interests.length > 0) {
       res.status(200).json(interests);
    } else {
      res.status(404).json("Interests not found");
      //  throw new Error("Interests not found");
    }
 });

 export { allInterets, interestsByUser }