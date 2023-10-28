import asyncHandler from "express-async-handler";
import { getAllInterests, getUserInterests, markInterests } from "../models/interestModel.js"

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

// desc
// route
// access

const addInterets = asyncHandler(async (req, res) => {
   const { user_id, checkboxes } = req.body; 
   const result = await markInterests(user_id, checkboxes)
   // console.log(checkboxes)
});

 export { allInterets, interestsByUser, addInterets }