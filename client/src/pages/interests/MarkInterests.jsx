import { useContext, useEffect, useState } from "react";
import "./markInterests.scss";
import { AuthContext } from "../../context/authContext";
import { useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import axios from "axios";

const MarkInterests = () => {
   const [interestData, setInterestData] = useState([]);
   
   const { currentUser } = useContext(AuthContext);
   const user_id = currentUser.user_id;

   const getInterests = async () => {
      try {
         const response = await axios.get(`/interests/all`);
         const jsonData = response.data;
         setInterestData(jsonData);
      } catch (error) {
         console.error(error.message);
      }
   };

   useEffect(() => {
      getInterests();
      getUserInterests();
   }, []);

   const [checkboxes, setCheckboxes] = useState({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
      15: false,
      16: false,
      17: false,
   });

   const getUserInterests = async () => {
      try {
         const response = await axios.get(`/interests?userId=${user_id}`);
         const jsonData = response.data.map((interest) => interest.interest_id);
         jsonData.forEach(value => {
            checkboxes[value] = true;
         })
      } catch (error) {
         console.error(error.message);
      }
   };

   const mutation = useMutation((newInterests) => {
      return makeRequest.post("/interests", newInterests);
   });

   const handleCheckboxChange = (checkboxName) => {
      const newCheckboxes = { ...checkboxes };
      newCheckboxes[checkboxName] = !newCheckboxes[checkboxName];
      setCheckboxes(newCheckboxes);
   };

   const handleSubmit = async (e) => {
      const trueCheckboxes = Object.keys(checkboxes).filter(
         (checkboxName) => checkboxes[checkboxName] === true
      );
      e.preventDefault();
      mutation.mutate({ user_id, checkboxes });
   };

   return (
      <div className="outer-container-mi">
         <div className="container-mi">
         <div className="interests-head-mi">Interests</div>
         <div className="interests-desc-mi">Create Your Unique Travel Profile: Pick your interests.</div>
         <ul className="ks-cboxtags">
            {interestData.map((interest) => (
               <li key={interest.interest_id}>
                  <input
                     type="checkbox"
                     id={interest.interest_id}
                     checked={checkboxes[interest.interest_id]}
                     onChange={() => handleCheckboxChange(interest.interest_id)}
                  />
                  <label htmlFor={interest.interest_id}>
                     {interest.interest_name}
                  </label>
               </li>
            ))}
         </ul>
         <button className="submit-mi" onClick={handleSubmit}>Submit</button>
      </div>
      </div>
   );
};

export default MarkInterests;
