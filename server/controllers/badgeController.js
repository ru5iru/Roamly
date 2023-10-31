import asyncHandler from "express-async-handler";
import {
   findBadgebyId,
   getAllbadges,
   userBadges,
   lastFiveBadges,
   findUserBadgebyId,
   saveBadge,
   deleteBadge
} from "../models/badgeModel.js";

import { getUserInterests } from "../models/interestModel.js";

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
   const interests = await getUserInterests(69690);
   const interestArr = interests.map((interest) => interest.interest_name);
   const filteredBadges = badges.filter((badge) => {
      return (
         interestArr.includes(badge.badge_type) ||
         badge.badge_type === "achievement" ||
         badge.user_id !== null
      );
   });

   if (filteredBadges.length > 0) {
      res.status(200).json(filteredBadges);
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

// desc
// route
// access

const changeBadge = asyncHandler(async (req, res) => {
   const { user_id, badge_id } = req.body;

   const isExists = await findUserBadgebyId(user_id, badge_id);

   if (isExists) {
      const badge = await deleteBadge(user_id, badge_id);
      res.status(200).json(badge);
   } else {
      const badge = await saveBadge(user_id, badge_id);
      res.status(200).json(badge);
   }
});

export { getBadge, allBadges, badgesByUser, lastFive, changeBadge };
