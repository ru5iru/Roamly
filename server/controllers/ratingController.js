import asyncHandler from "express-async-handler";
import {getServiceRatings} from "../models/ratingModel.js";

// desc
// route
// access

const serviceRatings = asyncHandler(async (req, res) => {
   const ratings = await getServiceRatings(req.query.service_id);

   if (ratings.length > 0) {
      res.status(200).json(ratings);
   } else {
      res.status(404);
      throw new Error("Posts not found");
   }
});

export {serviceRatings}