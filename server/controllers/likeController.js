import asyncHandler from "express-async-handler";
import {
   getLikes,
   getLikesCount,
   saveLike,
   deleteLike,
} from "../models/likeModel.js";

// desc
// route
// access

const likesByID = asyncHandler(async (req, res) => {
   const likes = await getLikes(req.query.postId);
   const count = await getLikesCount(req.query.postId);
   const likeArray = likes.map((like) => like.user_id);

   if (likes) {
      res.status(200).json({ likeArray, count });
   } else {
      res.status(404);
      throw new Error("Post not found");
   }
});

// desc
// route
// access

const addLike = asyncHandler(async (req, res) => {
   const { user_id, post_id } = req.body;

   const like = await saveLike(user_id, post_id);

   if (like.rowCount > 0) {
      res.status(201).json({
         user_id: like.rows[0].user_id,
         post_id: like.rows[0].post_id,
      });
   } else {
      res.status(400);
      throw new Error("Invalid user data");
   }
});

// desc
// route
// access

const removeLike = asyncHandler(async (req, res) => {
   const { user_id, post_id } = req.query;

   const like = await deleteLike(user_id, post_id);

   if (like) {
      res.status(201).json({
         status: "succes",
      });
   } else {
      res.status(400);
      throw new Error("Invalid user data");
   }
});

export { likesByID, addLike, removeLike };
