import "./rating.scss";

const Rating = ({ rating }) => {
   const stars = [];

    for(let i = 1; i <= 5; i++){
        if (i <= rating) {
            stars.push(<i key={i} className='fas fa-star'></i>)
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<i  key={i} className='far fa-star-half-stroke'></i>)
        } else {
            stars.push(<i  key={i} className='far fa-star'></i>)
        }
    }

   return (
      <div className="rating">
         
         {stars}

         <span className="rValue">{rating}</span>
         <span className="rCount">(10)</span>
      </div>
   );
};

export default Rating;