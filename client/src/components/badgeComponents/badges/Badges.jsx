import "./badges.scss";
import { useEffect, useState } from "react";
import Badge from "../badge/Badge";
import axios from "axios";

const Badges = ({ userID }) => {
   const [recentBadgeData, setRecentBadgeData] = useState([]);
   const [error, setError] = useState(null);

   useEffect(() => {
      if (userID) {
         axios
            .get(`/badges/lastfive?userId=${userID}`)
            .then((response) => {
               setRecentBadgeData(response.data);
            })
            .catch((error) => {
               setError("Error fetching badges");
            });
      }
   }, [userID]);

   return (
      <div className="badges">
         {recentBadgeData.length > 0
            ? recentBadgeData.map((badge) => (
                 <Badge badge={badge} key={badge.badge_id} />
              ))
            : <div className="empty">No badges yet.</div>}
      </div>
   );
};

export default Badges;