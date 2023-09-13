import { useEffect, useState } from "react";
import Badge from "../badge/Badge";
import axios from "axios";
import "./allbadges.scss";

const Allbadges = ({ userID, setOpenBadges }) => {
   const [activeStep, setActiveStep] = useState(1);

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

   const handleButtonClick = (step) => {
      setActiveStep(step);
   };

   const type_1 = [];
   const type_2 = [];

      badgeData?.length > 0 && badgeData.forEach((badge) => {
         if (badge.user_id === null) {
            badge.badge_color = "bg-grey-2";
         }
         const element = (
            <div className="badgeContainer" key={badge.badge_id}>
               <div className="badge-wrap">
                  <Badge badge={badge} key={badge.badge_id} />
               </div>
               <div className="badgeInfo">
                  <div className="badge-name">{badge.badge_name}</div>
                  <div className="badge-discription">{badge.badge_desc}</div>
               </div>
            </div>
         );

         if (badge.badge_type === "category") {
            if (badge.user_id != null) {
               type_1.push(element);
            }
         } else {
            type_2.push(element);
         }
      });

   return (
      <div className="allbadges">
         <div className="badges-wrapper">
            <div className="step-buttons">
               <button
                  className={`step-btn ${activeStep === 1 ? "active" : ""}`}
                  onClick={() => handleButtonClick(1)}
               >
                  Who am I
               </button>
               <button
                  className={`step-btn ${activeStep === 2 ? "active" : ""}`}
                  onClick={() => handleButtonClick(2)}
               >
                  Achievements
               </button>
            </div>
            <div className="steps badges-wrapper-2">
               <div
                  className={`step step1 badgeTypeContainer ${
                     activeStep === 1 ? "active" : ""
                  }`}
               >
                  {type_1}
               </div>
               <div
                  className={`step step2 badgeTypeContainer ${
                     activeStep === 2 ? "active" : ""
                  }`}
               >
                  {type_2}
               </div>
            </div>

            <button
               className="closeBadges"
               onClick={() => setOpenBadges(false)}
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

export default Allbadges;
