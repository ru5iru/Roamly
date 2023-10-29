import asyncHandler from "express-async-handler";
import {getServiceRatings, saveReview} from "../models/ratingModel.js";

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

// desc    Add new post
// route   POST /api/posts/
// access  private
const addReview = asyncHandler(async (req, res) => {
   const { service_id, user_id, rating, comment } = req.body;

   const review = await saveReview(service_id, user_id, rating, comment);

   if (review.rowCount > 0) {
      res.status(201).json({
         rating_id: review.rows[0].rating_id,
         service_id: review.rows[0].service_id,
         user_id: review.rows[0].user_id,
      });
   } else {
      res.status(400);
      throw new Error("Error");
   }
});

export {serviceRatings, addReview}