import { useEffect, useState } from "react";
import Badge from "../badge/Badge";
import "./badges.scss";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";

const Badges = () => {
   const userId = 69690;

   const {
      isLoading: recentBadgeIsLoading,
      error: recentBadgeError,
      data: recentBadgeData,
   } = useQuery(["recentbadges"], () =>
      makeRequest.get(`/badges/lastfive?userId=${userId}`).then((res) => {
         return res.data;
      })
   );

   return (
      <div className="badges">
         {recentBadgeError
            ? "Something went wrong!"
            : recentBadgeIsLoading
            ? "loading"
            : recentBadgeData.map((badge) => (
                 <Badge badge={badge} key={badge.badge_id} />
              ))}
      </div>
   );
};

export default Badges;
