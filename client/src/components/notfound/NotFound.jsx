import React from "react";
import "./notfound.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
   const navigate = useNavigate();

   const navigateFeed = () => {
      navigate("/feed");
   };

   return (
      <div className="notFound" onClick={navigateFeed}>
         <div className="notFoundHead">Oops! We can't find that page.</div>
         <div className="notFoundDesc">
            The link you followed may be broken, or the page may have been
            removed. Go back to{" "}
            <a href="" onClick={navigateFeed}>
               Roamly
            </a>
            .
         </div>
      </div>
   );
};

export default NotFound;
