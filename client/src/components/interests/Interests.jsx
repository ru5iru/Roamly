import { useEffect, useState } from "react";
import "./interests.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Interests = ({ userID }) => {
   const [interestData, setInterestData] = useState([]);
   const [error, setError] = useState(null);

   const navigate = useNavigate();

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

   const handleEditClick = () => {
      navigate("/markinterests");
   };

   return (
      <div className="interests">
         <div className="interestsHeadContainer">
            <div className="interestHead">Interested In</div>
            <div className="seeMore" onClick={handleEditClick}>Edit</div>
         </div>
         
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
