import { Link } from "react-router-dom";
import "./service.scss";
import Shops from "../../assets/images/shops.png";

const ShopService = () => {
  return (
    <Link to={"/trip/place/placedetails/shops"}>
      <div className="service">
        <img src={Shops} alt="Shop Services" />
        <span className="blur-background">
          <h3>Shops</h3>
        </span>
      </div>
    </Link>
  );
};

export default ShopService;
