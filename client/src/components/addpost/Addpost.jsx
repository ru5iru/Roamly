import "./addpost.scss";
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import TagFacesRoundedIcon from '@mui/icons-material/TagFacesRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Addpost = ({ setOpenAddPost }) => {
   
   const {currentUser} = useContext(AuthContext);

   return (
      <div className="addpost" onClick={ () => setOpenAddPost(true) }>
         <div className="container">
            <div className="user">
               <div className="userInfo">
                  <div className="imgContainer">
                     <img src={currentUser.profile_pic} alt="" />
                  </div>
                  
                  <input type="text" onClick={ () => setOpenAddPost(true) } placeholder="Share your adventure.." />
               </div>
            </div>
            <hr />
            <div className="info">
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
            </div>
         </div>
      </div>
   );
};

export default Addpost;
