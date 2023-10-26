import { useState } from "react";
import "./markInterests.scss";

const MarkInterests = () => {
   const [checkboxes, setCheckboxes] = useState({
      "1": false,
      "2": false,
      "3": false,
   });

   const handleCheckboxChange = (checkboxName) => {
      const newCheckboxes = { ...checkboxes };
      newCheckboxes[checkboxName] = !newCheckboxes[checkboxName];
      setCheckboxes(newCheckboxes);
   };

   const handleSubmit = async () => {
      const trueCheckboxes = Object.keys(checkboxes).filter(
         (checkboxName) => checkboxes[checkboxName] === true
      );
      console.log(trueCheckboxes);
   };
   return (
      <div className="container">
         <ul className="ks-cboxtags">
            <li>
               <input type="checkbox" id="chk1" checked={checkboxes["1"]} onChange={() => handleCheckboxChange("1")}/>
               <label htmlFor="chk1">Hiking</label>
            </li>
            <li>
               <input type="checkbox" id="chk2" checked={checkboxes["2"]} onChange={() => handleCheckboxChange("2")}/>
               <label htmlFor="chk2">Camping</label>
            </li>
            <li>
               <input type="checkbox" id="chk3" checked={checkboxes["3"]} onChange={() => handleCheckboxChange("3")}/>
               <label htmlFor="chk3">Climbing Mountains</label>
            </li>
         </ul>
         <button onClick={handleSubmit}>Submit</button>
      </div>
   );
};

export default MarkInterests;
