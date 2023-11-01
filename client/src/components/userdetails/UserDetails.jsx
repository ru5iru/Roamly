import { useEffect, useState } from "react";
import "./userdetails.scss";
import axios from "axios";

import agoda from "../../assets/images/profile/agoda.png";
import airbnb from "../../assets/images/profile/airbnb.png";
import booking from "../../assets/images/profile/booking.png";

const UserDetails = () => {
   return (
      <div className="userdetails">
         <div className="userdetailsHead">Intro</div>
         <div className="userdetailsContainer">
            <div className="detailContainer">
               <div className="detailImg">
                  <img
                     width="30"
                     height="30"
                     src="https://img.icons8.com/ios-glyphs/30/info--v1.png"
                     alt="info--v1"
                  />
               </div>
               <div className="detail">Hotel</div>
            </div>
            <div className="detailContainer">
               <div className="detailImg">
                  <img
                     width="24"
                     height="24"
                     src="https://img.icons8.com/material-sharp/24/marker.png"
                     alt="marker"
                  />
               </div>
               <div className="detail">Matara, Sri Lanka.</div>
            </div>
            <div className="detailContainer">
               <div className="detailImg">
                  <img
                     width="30"
                     height="30"
                     src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
                     alt="phone--v1"
                  />
               </div>
               <div className="detail">0412292295</div>
            </div>
            <div className="detailContainer">
               <div className="detailImg">
                  <img
                     width="24"
                     height="24"
                     src="https://img.icons8.com/material-rounded/24/mail.png"
                     alt="mail"
                  />
               </div>
               <div className="detail">hoteltanzy@gmail.com</div>
            </div>
         </div>

         <iframe src="https://maps.google.com/maps?q=6.0326,80.2170&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>

         <div className="userdetailsHead">Book via</div>
         <div className="bookings">
            <div className="booking">
               <img src={booking} alt="" />
            </div>
            <div className="booking">
               <img src={agoda} alt="" />
            </div>
            <div className="booking">
               <img src={airbnb} alt="" />
            </div>
         </div>
      </div>
   );
};

export default UserDetails;
