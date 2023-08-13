import { useEffect, useState } from "react";
import "./interests.scss";
import axios from "axios";

const Interests = ({ userID }) => {
   const [interestData, setInterestData] = useState([]);
   const [error, setError] = useState(null);

   useEffect(() => {
      if (userID) {
         axios
            .get(`/interests?userId=${userID}`)
            .then((response) => {
               setInterestData(response.data);
            })
            .catch((error) => {
               setError("Error fetching interests");
            });
      }
   }, [userID]);

   return (
      <div className="interests">
         <div className="interestHead">Interested In</div>
         <div className="interestContainer">
            {interestData.length > 0
               ? interestData.map((interest) => (
                    <div className="interest" key={interest.interest_id}>
                       {interest.interest_name}
                    </div>
                 ))
               : <div className="empty">Nothing to show. :{`(`}</div>}
         </div>
      </div>
   );
};

export default Interests;
