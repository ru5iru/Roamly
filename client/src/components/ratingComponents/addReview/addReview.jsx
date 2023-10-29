import "./addreview.scss";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

const AddReview = ({setOpenAddReview}) => {
   
   const {currentUser} = useContext(AuthContext);

   return (
      <div className="addreview" onClick={ () => setOpenAddReview(true) }>
         <div className="container">
            <div className="user">
               <div className="userInfo">
                  <div className="imgContainer">
                     <img src={currentUser.profile_pic} alt="" />
                  </div>
                  
                  <input type="text" onClick={ () => setOpenAddReview(true) } placeholder="Share your adventure.." />
               </div>
            </div>
            <hr />
            {/* <div className="info">
               <div className="item">
                  <InsertPhotoRoundedIcon />
                  Photos
               </div>
               <div className="item">
                  <TagFacesRoundedIcon />
                  Activities | Adventures
               </div>
               <div className="item">
                  <PlaceRoundedIcon />
                  Places
               </div>
            </div> */}
         </div>
      </div>
   );
};

export default AddReview;
