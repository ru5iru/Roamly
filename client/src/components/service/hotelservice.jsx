import { Link } from "react-router-dom";
import "./service.scss";
import Hotel from "../../assets/images/hotels.png";

const HotelService = () => {
  return (
    <Link to={"/hotel"}>
      <div className="service">
        <img src={Hotel} alt="Shop Services" />
        <span className="blur-background">
          <h3>Hotels</h3>
        </span>
      </div>
    </Link>
  );
};

export default HotelService;
