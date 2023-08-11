import asyncHandler from "express-async-handler";
import {
   findBadgebyId,
   getAllbadges,
   userBadges,
   lastFiveBadges,
} from "../models/badgeModel.js";

// desc
// route
// access

const getBadge = asyncHandler(async (req, res) => {
   const badge = await findBadgebyId(req.params.id);

   if (badge) {
      res.status(201).json({
         badge_id: badge.badge_id,
         badge_name: badge.badge_name,
         badge_desc: badge.badge_desc,
         badge_img: badge.badge_img,
         badge_color: badge.badge_color,
         badge_type: badge.badge_type,
      });
   } else {
      res.status(404);
      throw new Error("Badge not found");
   }
});

// desc
// route
// access

const allBadges = asyncHandler(async (req, res) => {
   const badges = await getAllbadges();

   if (badges.length > 0) {
      res.status(200).json(badges);
   } else {
      res.status(404);
      throw new Error("Badges not found");
   }
});

// desc
// route
// access

const badgesByUser = asyncHandler(async (req, res) => {
   const badges = await userBadges(req.query.userId);

   if (badges.length > 0) {
      res.status(200).json(badges);
   } else {
      res.status(404);
      throw new Error("Badges not found");
   }
});

// desc
// route
// access

const lastFive = asyncHandler(async (req, res) => {
   const badges = await lastFiveBadges(req.query.userId);

   if (badges.length > 0) {
      res.status(200).json(badges);
   } else {
      res.status(404);
      throw new Error("Badges not found");
   }
});

export { getBadge, allBadges, badgesByUser, lastFive };
