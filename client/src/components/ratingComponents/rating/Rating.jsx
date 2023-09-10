import "./rating.scss";

const Rating = ({ userID }) => {

   return (
      <div className="rating">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
      </div>
   );
};

export default Rating;