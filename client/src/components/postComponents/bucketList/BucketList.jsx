import "./bucketlist.scss";

const BucketList = ({ setOpenBucketList }) => {
   return (
      <div className="bucketlist">
         <div className="update-wrapper">
            <div className="update-head">Bucket List</div>
            <div className="name-container">
               <div className="fname">
                  <label>First Name</label>
                  <input type="text" value="" name="name" onChange="" />
               </div>
               <div className="lname">
                  <label>Last Name</label>
                  <input type="text" value="" name="name" onChange="" />
               </div>
            </div>
            <div className="email-container">
               <div className="email">
                  <label>Email</label>
                  <input type="text" value="" name="name" onChange="" />
               </div>
            </div>

            <button className="updateDetails" onClick="">Update</button>

            <button className="closeUpdate" onClick={() => setOpenBucketList(false)}>
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
