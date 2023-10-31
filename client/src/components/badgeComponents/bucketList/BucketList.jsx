import { useEffect, useState } from "react";
import Badge from "../badge/Badge";
import axios from "axios";
import "./bucketlist.scss";

const BucketList = ({ userID, setOpenBucketList }) => {
   const userId = userID;

   const [badgeData, setBadgeData] = useState([]);
   const [error, setError] = useState(null);

   useEffect(() => {
      if (userID) {
         axios
            .get(`/badges?userId=${userId}`)
            .then((response) => {
               setBadgeData(response.data);
            })
            .catch((error) => {
               setError("Error fetching badges");
            });
      }
   }, [userID]);

   

   const type_1 = [];

   badgeData?.length > 0 &&
      badgeData.forEach((badge) => {
         if (badge.user_id === null) {
            badge.badge_color = "bg-grey-2";
         }
         const element = (
            <div className="badgeContainer" key={badge.badge_id}>
               <div className="form-chk">
                  <input
                     id={badge.badge_id}
                     type="checkbox"
                     className="b-check"
                     defaultChecked={badge.user_id !== null ? true : false}
                  />
                  <label htmlFor={badge.badge_id} tabIndex="1"></label>
               </div>

               <div className="badge-wrap">
                  <Badge badge={badge} key={badge.badge_id} />
               </div>
               <div className="badgeInfo">
                  <div className="badge-name">{badge.badge_name}</div>
                  <div className="badge-discription">{badge.badge_desc}</div>
               </div>
            </div>
         );

         if (badge.badge_type !== "achievement") {
            type_1.push(element);
         }
      });

   return (
      <div className="bucketlist">
         <div className="badges-wrapper">
            <div className="containerHead">
               We've created a bucketlist for you based on your interests..
            </div>
            <div className="badges-wrapper-2">
               <div className="badgeTypeContainer">{type_1}</div>
            </div>

            <button
               className="closeBadges"
               onClick={() => setOpenBucketList(false)}
            >
               <img
                  className="closeImg"
                  width="96"
                  height="96"
                  src="https://img.icons8.com/material-outlined/96/cancel--v1.png"
                  alt="cancel--v1"
               />
            </button>
         </div>
      </div>
   );
};

export default BucketList;
