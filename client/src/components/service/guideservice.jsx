import { Link } from "react-router-dom";
import "./service.scss";
import Guides from "../../assets/images/guides.png";

const Guideservice = () => {
  return (
    <Link to={"/guide"}>
      <div className="service">
        <img src={Guides} alt="Guide Services" />
        <span className="blur-background">
          <h3>Guides</h3>
        </span>
      </div>
    </Link>
  );
};

export default Guideservice;