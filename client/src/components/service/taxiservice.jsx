import { Link } from "react-router-dom";
import "./service.scss";
import Taxis from "../../assets/images/taxi.jpg";

const Taxiservice = () => {
  return (
    <Link to={"/taxi"}>
      <div className="service">
        <img src={Taxis} alt="Shop Services" />
        <span className="blur-background">
          <h3>Taxis</h3>
        </span>
      </div>
    </Link>
  );
};

export default Taxiservice;

