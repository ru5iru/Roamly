import "./rating.scss";

const Rating = ({ userID }) => {
   return (
      <div className="rating">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
      </div>
   );
};

export default Rating;
