import asyncHandler from "express-async-handler";
import {
   getFollowers,
   getFollowersCount,
   saveFollow,
   deleteFollow,
} from "../models/relationshipModel.js";

// desc
// route
// access

const followersByID = asyncHandler(async (req, res) => {
   const followers = await getFollowers(req.query.userId);
   const count = await getFollowersCount(req.query.userId);
   const followerArray = followers.map((follower) => follower.follower_id);

   if (followers) {
      res.status(200).json({ followerArray, count });
   } else {
      res.status(404);
      throw new Error("User not found");
   }
});

// desc
// route
// access

const followUser = asyncHandler(async (req, res) => {
   const { user_id, follower_id } = req.body;

   const follow = await saveFollow(user_id, follower_id);

   if (follow.rowCount > 0) {
      res.status(201).json({
         user_id: follow.rows[0].user_id,
         follower_id: follow.rows[0].follower_id,
      });
   } else {
      res.status(400);
      throw new Error("Invalid user data");
   }
});

// desc
// route
// access

const unfollowUser = asyncHandler(async (req, res) => {
   const { user_id, follower_id } = req.query;

   const follow = await deleteFollow(user_id, follower_id);

   if (follow) {
      res.status(201).json({
         status: "succes",
      });
   } else {
      res.status(400);
      throw new Error("Invalid user data");
   }
});

export { followersByID, followUser, unfollowUser };
